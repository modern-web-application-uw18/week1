// Define class here
class HTMLElement {
  constructor(tag, content) {
    this.tag = `<${tag}>`;
    this.closingTag = `</${tag}>`;
    this.content = content;
  }
  render() {
    return `${this.tag}${this.content}${this.closingTag}`;
  }
}

// Export class here
module.exports = HTMLElement;
