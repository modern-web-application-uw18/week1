const HTMLElement = require('./HTMLElement');

// Define class here

class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
  }
}

const part2 = new DivElement('content');

console.log(part2.render());

// Export class here
module.exports = DivElement;
