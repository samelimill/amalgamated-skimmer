const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

const prompts = [
    {
        type: 'input',
        message: 'Please enter up to three letters:',
        name: 'letters' 
    },
    {
        type: 'input',
        message: 'Please enter a color for the text by keyword or hexadecimal number:',
        name: 'textcolor'
    },
    {
        type: 'list',
        message: 'Please select one of the following shapes:',
        name: 'shapes',
        choices: [
            'Circle',
            'Triangle',
            'Square'
        ]
    },
    {
        type: 'input',
        message: 'Please enter a color for the shape by keyword or hexadecimal number:',
        name: 'color'
    }
]

function init () {
    inquirer
        .prompt(prompts)
        .then((res) =>{
            var newShape = '';
            const svgHead = '<svg version="1.1"\nwidth="300" height="200"\nxmlns="http://www.w3.org/2000/svg">\n'
            const svgTail = `<text x="150" y="100" font-size="60" text-anchor="middle" fill="${res.textcolor}">${res.letters}</text>\n</svg>\n`
            switch(res.shapes){
                case 'Circle':
                    newShape = new Circle(res.color);
                    break;
                case 'Square':
                    newShape = new Square(res.color);
                    break;
                case 'Triangle':
                    newShape = new Triangle(res.color);
            };
            const finalSVG = svgHead + newShape.render() + svgTail;
            return finalSVG;
        }) 
        .then((res) =>{
            fs.writeFile('examples/logo.svg', res, (err)=>
            err ? console.error(err) : console.log('Generated logo.svg'))
             });
};

init();