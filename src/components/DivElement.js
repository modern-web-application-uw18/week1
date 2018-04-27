const HTMLElement = require('./HTMLElement');

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
    this.contest = content;
  }
  render() {
    return `<div>${this.content}</div>`;
  }
}
module.exports = DivElement;
