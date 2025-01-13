// Creating class for Shape and extending to Circle, Triangle, and Square
class Shape {
    constructor(color) {
        this.color = color;
        this.textX = 150;
        this.textY = 125;
        this.svgHeight = 200;
        this.svgWidth = 300;
    }
    setColor(color) {
        this.color = color;
    }
    render(){}
}

class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<circle cx="150" cy="100" r="80"  fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
        this.textX = 150;
        this.textY = 200;
        this.svgHeight = 300;
        this.svgWidth = 500;
    }
    render() {
        return `<polygon points="150, 30 250, 250 50, 250" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor(color) {
        super(color);
        this.textX = 85;
        this.textY = 85;
    }
    render() {
        return `<rect x="10" y="10" width="150" height="150" fill="${this.color}" />`;
    }
}
// Exports all of the shapes
module.exports = { Circle, Triangle, Square, Shape };
