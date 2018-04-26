const HTMLElement = require('./HTMLElement');

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
  }
}
// Test
// const andIThinkToMyself = new DivElement('What a wonderful world');
// console.log(andIThinkToMyself.render());
// prints "<div>What a wonderful world</div>"
// Export class here
module.exports = DivElement;
