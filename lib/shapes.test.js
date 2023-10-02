const { Circle, Triangle, Square } = require('./shapes.js');


describe('Circle', () => {
    it('Should return a circle object with the selected color', () => {
        const circle = new Circle('blue');
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="75" fill="blue"/>\n');
    })
});

describe('Triangle', () => {
    it('Should return a triangle object with the selected color', () => {
        const triangle = new Triangle('green');
        expect(triangle.render()).toEqual('<polygon points="150,182 244,18 56,18" fill="green"/>\n');
    })
});

describe('Square', () => {
    it('Should return a square object with the selected color', () => {
        const square = new Square('red');
        expect(square.render()).toEqual('<rect x="75" y="25" width="150" height="150" fill="red"/>\n');
    })
});