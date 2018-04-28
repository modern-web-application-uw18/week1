const HTMLElement = require('./HTMLElement');

// Define class here
class DivElement extends HTMLElement {
  constructor(tag, content) {
    super(tag, content);
    this.content = content;
    this.tag = 'div';
  }
}
// Export class here
module.exports = { };
