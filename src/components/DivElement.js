const HTMLElement = require('./HTMLElement');

// Define class here
module.exports = class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
  }
};
