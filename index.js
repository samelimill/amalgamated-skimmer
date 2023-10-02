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
            if (res.shapes === 'Circle'){
                const newShape = new Circle(res.letters, res.color);
                finalShape = newShape.circle;
                console.log(finalShape);
            } else if (res.shapes === 'Square'){
                const newShape = new Square(res.letters, res.color);
                finalShape = newShape.square;
                console.log(finalShape);
            } else if (res.shapes === 'Triangle'){
                const newShape = new Triangle(res.letters, res.color);
                finalShape = newShape.triangle;
                console.log(finalShape);
            };
            return finalShape;
        })
        .then((res) =>{
            fs.writeFile('example.svg', res, (err)=>
            err ? console.error(err) : console.log('Commit logged!'))
        });
};

init();