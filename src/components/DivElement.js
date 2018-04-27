const HTMLElement = require('./HTMLElement');

// Define class here
module.exports = class DivElement extends HTMLElement {
  contructor(content) {
    super('div', content);
  }
};
