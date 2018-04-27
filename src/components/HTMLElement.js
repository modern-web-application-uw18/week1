// Define class here
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  get render() {
    return this.format();
  }

  format() {
    const { tag } = this;
    const { content } = this;
    return `<${tag}>${content}<${tag}/>`;
  }
}

// Export class here
module.exports = HTMLElement;
