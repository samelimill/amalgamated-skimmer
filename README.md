<h1 align="center" id="title">SVG Logo Generator</h1>
<div align="center">

![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/t/samelimill/amalgamated-skimmer)
![JS badge](https://img.shields.io/badge/javascript-darkgreen?logo=javascript)
![Node badge](https://img.shields.io/badge/node-yellow?logo=node.js)
![Jest badge](https://img.shields.io/badge/jest-green?logo=jest)

Make simple SVG logos with this easy-to-use command line application.
</div>

## Objectives
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```
## Installation
To use this app, the user will have to install Node.js as well as the Inquirer and Jest packages. The app can then be initalized by typing 'node index.js' into the command line.

## Demo
A demo video walking through the function of this app can be found [here.](https://drive.google.com/file/d/1Tjmo4UVp65x11PBfdRV1ReQ43WmE9w3O/view)

## Acknowledgments
The template for SVG files was taken from [the MDN web docs tutorial on SVG.](https://developer.mozilla.org/en-US/docs/Web/SVG) The pages on [basic shapes](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes) and [text](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts) were referenced in particular.
