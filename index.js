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
        message: 'Please enter a color by keyword or hexadecimal number:',
        name: 'color'
    }
]

function init () {
    inquirer
        .prompt(prompts)
        .then((res) =>{
            var finalShape = '';
            const svgHead = '<svg version="1.1"\nwidth="300" height="200"\nxmlns="http://www.w3.org/2000/svg">\n'
            const svgTail = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${res.letters}</text>\n</svg>\n`
            if (res.shapes === 'Circle'){
                const newShape = new Circle(res.color);
                finalShape = newShape.circle;
            } else if (res.shapes === 'Square'){
                const newShape = new Square(res.color);
                finalShape = newShape.square;
            } else if (res.shapes === 'Triangle'){
                const newShape = new Triangle(res.color);
                finalShape = newShape.triangle;
            };
            const finalSVG = svgHead + finalShape + svgTail;
            return finalSVG;
        })
        .then((res) =>{
            fs.writeFile('examples/example.svg', res, (err)=>
            err ? console.error(err) : console.log('SVG created!'))
        });
};

init();