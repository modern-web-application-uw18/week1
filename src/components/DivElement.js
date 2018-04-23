const HTMLElement = require('./HTMLElement');

// Define class here

class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
    this.content = content;
  }
}

// Export class here
module.exports = DivElement;
