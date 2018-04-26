const HTMLElement = require('./HTMLElement');

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super(content);
    this.content = content;
  }
  render() {
    return `<div>${this.content}</div>`;
  }
}

module.exports = DivElement;
