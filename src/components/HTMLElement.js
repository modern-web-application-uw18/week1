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

// Export class here
module.exports = HTMLElement;
const HTMLoutput1 = new HTMLElement('h3', 'h3 content generated by HTMLElement.js');
const HTMLoutput2 = new HTMLElement('p', 'p content generated by HTMLElement.js');
console.log(HTMLoutput1.render(), HTMLoutput2.render());
