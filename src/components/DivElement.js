const HTMLElement = require('./HTMLElement');

class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
  }
}

const andIThinkToMyself = new DivElement('What a wonderful world');

console.log(andIThinkToMyself.render());

module.exports = DivElement;
