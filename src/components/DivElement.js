const HTMLElement = require('./HTMLElement');

// Define class here
module.exports = class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
  }
  render() {
    return super.render();
  }
};
// Export class here
// export default { DivElement };
