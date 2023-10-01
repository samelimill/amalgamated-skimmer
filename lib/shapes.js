class ShapeItem {
    constructor(text, color) {
        this.text = text;
        this.color = color;
        const svgStart = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">`
        const svgEnd = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${text}</text>
        </svg>`
    };
};

class Circle extends ShapeItem {
    constructor(color, svgStart, svgEnd){
        super(color, svgStart, svgEnd);
        const circle = `${svgStart}
        <circle cx="150" cy="100" r="80" fill="${color}"/>
        ${svgEnd}`
    }
}

class Triangle extends ShapeItem {
    constructor(text, color){
        super(text, color);
        const circle = ``
    }
}

class Square extends ShapeItem {
    constructor(text, color){
        super(text, color);
    }
}