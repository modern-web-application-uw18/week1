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

const part1 = new HTMLElement('h1', 'The Greatest Stort Ever Told');

console.log(part1.render());

// Export class here
module.exports = HTMLElement;
