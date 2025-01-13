// Setting variables
const inquirer = require("inquirer");
const { choices } = require("yargs");
var fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");
const svg = require("./lib/svg");

inquirer.prompt([
    {
        // Getting inputs for logoText, textColor, Shape, and shapeColor
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
        name: "Shape",
        type: "list",
        message: "Pick a shape",
        choices: ["Circle", "Triangle", "Square"],
    },
    {
        name: "shapeColor",
        type: "input",
        message: "Pick the color of the shape",
    },
])
    // after getting input, create logo
    .then((answer) => {
        console.log(`Your logo: ${answer.logoText} was created.`);
        makingLogo(answer);
    });

// Function to create logo
function makingLogo(answer) {
// putting if statement for answer given
    let shape = null;
    if (answer.Shape === "Circle") {
        shape = new Circle(answer.shapeColor);
    }
    else if (answer.Shape === "Triangle") {
        shape = new Triangle(answer.shapeColor);
    }
    else if (answer.Shape === "Square") {
        shape = new Square(answer.shapeColor);
    }
    const svg = new Svg(shape, answer.logoText, answer.textColor);
    // writing file
    fs.writeFile("logo.svg", svg.render(), function (err) {
        if (err) throw err;
        console.log("Saved");
    });
}
