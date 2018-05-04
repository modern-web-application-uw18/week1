const HTMLElement = require('./HTMLElement');

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super(content);
    this.content = content;
    this.tag = 'div';
  }
  render() {
    return `<${this.tag}>${this.content}</${this.tag}>`;
  }
}
// Export class here
module.exports = DivElement;
