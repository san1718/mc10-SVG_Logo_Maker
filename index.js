const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');
const { generateSVG } = require('./lib/svg');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Add characters for logo creation (3 max): ',
    validate: (input) => input.length <= 3 || '3 characters max.',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Pick(type) a color for the text: ',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Pick a shape for the logo: ',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Pick(type) the color of the shape: ',
  },
];

function init() {
  inquirer.prompt(questions).then((answers) => {
    let shape;
    switch (answers.shape) {
      case 'Circle':
        shape = new Circle();
        break;
      case 'Triangle':
        shape = new Triangle();
        break;
      case 'Square':
        shape = new Square();
        break;
    }
    shape.setColor(answers.shapeColor);
    const svg = generateSVG(answers.text, answers.textColor, shape);
    fs.writeFileSync('./examples/logo.svg', svg);
    console.log('Your logo was created.');
  });
}

init();
