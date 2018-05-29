const HTMLElement = require('./HTMLElement');

// Define class here

class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
  }
}

const stepTwo = new DivElement('content');

console.log(stepTwo.render());

// Export class here
module.exports = DivElement;
