const HTMLElement = require('./HTMLElement');

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super(content);
    super.content = content;
    this.tag = 'div';
  }
}

// Export class here
module.exports = DivElement;
