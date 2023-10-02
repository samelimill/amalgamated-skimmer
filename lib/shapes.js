class ShapeItem {
    constructor(color) {
        this.color = color;
    };
};

class Circle extends ShapeItem {
    constructor(color, circle){
        super(color);
        this.circle = `<circle cx="150" cy="100" r="75" fill="${color}"/>\n`
    }
}

class Triangle extends ShapeItem {
    constructor(color, triangle){
        super(color);
        this.triangle = `<polygon points="150,18 244,182 56,182" fill="${color}"/>\n`
    }
}

class Square extends ShapeItem {
    constructor(color, square){
        super(color);
        this.square = `<rect x="75" y="25" width="150" height="150" fill="${color}"/>\n`
    }
}

module.exports = {
    Circle,
    Square,
    Triangle
};