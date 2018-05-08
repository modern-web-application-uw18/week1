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

const einstienQuote = new HTMLElement('p', 'Imagination is more important then knowledge...');

console.log(lovelaceQuote.render());

// Export class here
module.exports = HTMLElement;
