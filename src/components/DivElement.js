const HTMLElement = require('./HTMLElement');

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super();
    this.content = content;
    this.tag = '<div>';
    this.closingTag = '</div>';
  }
}
// Export class here
module.exports = DivElement;
