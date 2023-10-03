// Each class downstream from ShapeItem uses color and the render method
class ShapeItem {
    constructor(color) {
        this.color = color;
    };
    render(){
        return this.shape;
    };
};

// Class for each shape has size and placement already, just needs color
class Circle extends ShapeItem {
    constructor(color, shape){
        super(color);
        this.shape = `<circle cx="150" cy="100" r="75" fill="${color}"/>\n`
    };
};

class Triangle extends ShapeItem {
    constructor(color, shape){
        super(color);
        this.shape = `<polygon points="150,182 244,18 56,18" fill="${color}"/>\n`
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