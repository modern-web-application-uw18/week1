const HTMLElement = require('./HTMLElement');

// Define class here
class DivElement extends HTMLElement {
    constructor(content){
        super(content);
        this.content = content;
    }
    render(){
        return `<div>${this.content}</div>`;
    }
}
const andIThinkToMyself = new DivElement('What a wonderful world');


// Export class here
module.exports = {};
