class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }
  render() {
    return `<${this.tag}>${this.content}</${this.tag}>`;
  }
}

module.exports.default = HTMLElement;
// export default HTMLElement; // ES6 unsupported by node
const lovelaceQuote = new HTMLElement('p', 'I am never so happy as when I am really engaged in good earnest...');
console.log(lovelaceQuote.render());

const div = new HTMLElement('div', 'University of Washington');
console.log(div.render());
