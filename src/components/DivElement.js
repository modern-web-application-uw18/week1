const HTMLElement = require('./HTMLElement').default;
// import HTMLElement from './HTMLElement'; ES6 unsupported by node -v 8

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
  }
}

module.exports.default = DivElement;
// export default DivElement; // ES6 unsupported by node -v 8
const andIThinkToMyself = new DivElement('What a wonderful world');
console.log(andIThinkToMyself.render());
