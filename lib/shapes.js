class ShapeItem {
    constructor(color) {
        this.color = color;
    };
    render(){
        return this.shape;
    };
};

class Circle extends ShapeItem {
    constructor(color, shape){
        super(color);
        this.shape = `<circle cx="150" cy="100" r="75" fill="${color}"/>\n`
    };
};

class Triangle extends ShapeItem {
    constructor(color, shape){
        super(color);
        this.shape = `<polygon points="150,18 244,182 56,182" fill="${color}"/>\n`
    };
};

class Square extends ShapeItem {
    constructor(color, shape){
        super(color);
        this.shape = `<rect x="75" y="25" width="150" height="150" fill="${color}"/>\n`
    };
};

module.exports = {
    Circle,
    Triangle,
    Square
};