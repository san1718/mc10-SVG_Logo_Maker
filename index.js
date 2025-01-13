// Importing libraries and setting variables
const inquirer = require("inquirer");
const { choices } = require("yargs");
var fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");
const svg = require("./lib/svg");

inquirer.prompt([
    {
        name: "logoText",
        type: "input",
        message: "Add characters for logo creation (3 max)",
    },
    {
        name: "textColor",
        type: "input",
        message: "Pick a color for the text",
    },
    {
        name: "shape",
        type: "input",
        message: "Pick a shape",
        choices: ["Circle, Triangle", "Square"],
    },
    {
        name: "shapeColor",
        type: "input",
        message: "Pick the color of the shape",
    },
])