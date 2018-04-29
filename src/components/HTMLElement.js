// Define class here
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag.toLowerCase();
    this.content = content;
  }

  render() {
    return `<${this.tag}>${this.content}</${this.tag}>`;
  }
}

// Export class here
module.exports = HTMLElement;
