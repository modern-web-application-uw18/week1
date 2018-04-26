// Define class here

class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }
  render() {
    console.log(`<${this.tag}>${this.content}</${this.tag}>`);
  }
}

// Export class here
module.exports = HTMLElement;

