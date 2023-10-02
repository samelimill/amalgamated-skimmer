class Text {
    constructor(color, text){
        this.color = color;
        this.text = text;
    }
    render(){
        return `<text x="150" y="110" font-size="50" font-family="Helvetica" text-anchor="middle" fill="${this.color}">${this.text}</text>\n</svg>\n`
    }
}

module.exports = Text;