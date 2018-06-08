const HTMLElement = require('./HTMLElement');

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
    this.content = content;
  }
}

module.exports = DivElement;
