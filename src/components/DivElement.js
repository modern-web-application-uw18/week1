const HTMLElement = require('./HTMLElement');

// Define class here
class DivElement extends HTMLElement {
  contructor(content) {
    super('div', content);
  }
}
module.exports = DivElement;
