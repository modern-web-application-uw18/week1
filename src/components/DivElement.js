const HTMLElement = require('./HTMLElement');

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
  }
  render() {
    return super.render();
  }
}

// Export class here
module.exports = DivElement;
