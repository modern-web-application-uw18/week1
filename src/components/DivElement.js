const HTMLElement = require('./HTMLElement');

// Define class here
class DivElement extends HTMLElement {
  contructor(content) {
    super('div', content);
    this.contest = content;
  }
  render() {
    return `<div>${this.content}</div>`;
  }
}
module.exports = DivElement;
