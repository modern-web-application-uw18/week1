const HTMLElement = require('./HTMLElement');

// Define class here

class DivElement extends HTMLElement {
  constructor(element) {
    super('div', element);
  }
  render() {
    return super.render();
  }
}


const andIThinkToMyself = new DivElement('What a wonderful world');
console.log(andIThinkToMyself.render());
// Export class here
module.exports = DivElement;
