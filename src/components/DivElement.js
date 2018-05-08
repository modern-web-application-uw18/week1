const HTMLElement = require('./HTMLElement.js');


// Define class here

class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
  }
}

const andIThinkToMyself = new DivElement('What a wonderful world');

console.log(andIThinkToMyself.render());

// Export class here
module.exports = DivElement;
