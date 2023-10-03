// package imports
const inquirer = require('inquirer');
const fs = require('fs');
// importing classes from lib files
const { Circle, Square, Triangle } = require('./lib/shapes');
const Text = require('./lib/text.js');

// array for inquirer in init
const prompts = [
    {
        type: 'input',
        message: 'Please enter up to three characters:',
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
            // variable to be filled in by later switch statement
            var newShape = '';
            // constant variable for beginning of svg file
            const svgHead = '<svg version="1.1"\nwidth="300" height="200"\nxmlns="http://www.w3.org/2000/svg">\n'
            // switch fires off matching class
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
            // text and text color are constructed in new Text object
            const newText = new Text(res.textcolor, res.letters);
            // Each element of the file is concatenated together, render() method returns the raw string of the object
            const finalSVG = svgHead + newShape.render() + newText.render();
            return finalSVG;
        }) 
        .then((res) =>{
            fs.writeFile('examples/logo.svg', res, (err)=>
            err ? console.error(err) : console.log('Generated logo.svg'))
             });
};

init();