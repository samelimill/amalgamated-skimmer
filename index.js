const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes');

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
        options: [
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

inquirer
    .prompt(prompts)
    .then((res) =>{
        const finalShape = new `${res.shapes}`;
        
    });