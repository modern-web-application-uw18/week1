const HTMLElement = require('./HTMLElement');

class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
  }
}

// Export class here
module.exports = DivElement;
