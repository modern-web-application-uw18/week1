const HTMLElement = require('./HTMLElement');

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
  }
}
// Export class here

module.exports = DivElement;
const andIThinkToMyself = new DivElement('What a wonderful world');
console.log(andIThinkToMyself.render());
