class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }
  render() {
    return `<${this.tag}>${this.content}</${this.tag}>`;
  }
}

// Export class here
module.exports = HTMLElement;
const lovelaceQuote = new HTMLElement('p', 'I am never so happy as when I am really engaged in good earnest...');
console.log(lovelaceQuote.render());
