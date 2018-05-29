// Define class here

class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }
  render() {
    return `<${this.tag}>${this.content}</${this.tag}>`;
  }
}

const stepOne = new HTMLElement('p', 'This is a sentence in a paragraph tag.');
console.log(stepOne.render());
// Export class here
module.exports = HTMLElement;
