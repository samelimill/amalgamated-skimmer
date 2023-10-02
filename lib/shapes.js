class ShapeItem {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    };
};

class Circle extends ShapeItem {
    constructor(text, color, circle){
        super(text, color);
        this.circle = `<svg version="1.1" 
width="300" height="200" 
xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="75" fill="${color}"/>
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${text}</text>
</svg>`
    }
}

class Triangle extends ShapeItem {
    constructor(text, color, triangle){
        super(text, color);
        this.triangle = `<svg version="1.1" 
width="300" height="200" 
xmlns="http://www.w3.org/2000/svg">
<polygon points="150,18 244,182 56,182" fill="${color}"/>
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${text}</text>
</svg>`
    }
}

class Square extends ShapeItem {
    constructor(text, color, square){
        super(text, color);
        this.square = `<svg version="1.1" 
width="300" height="200" 
xmlns="http://www.w3.org/2000/svg">
<rect x="75" y="175" width="150" height="150" fill="${color}"/>
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${text}</text>
</svg>`
    }
}

module.exports = {
    Circle,
    Square,
    Triangle
};