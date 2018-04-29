const HTMLElement = require('./HTMLElement');

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
  }
}
const Divstuff = new DivElement('This is content from DivElement.js. This could be used for composing content that needs to be updated from a db and then spat out to different pages. Handy!');
// Export class here
module.exports = DivElement;
