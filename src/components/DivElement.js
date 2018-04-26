const HTMLElement = require('./HTMLElement');

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content); // super for calling functions from parent.  Tag set to DIV.
  }
}

// Export class here
module.exports = DivElement;