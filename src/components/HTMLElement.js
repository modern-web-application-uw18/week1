module.exports = class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }
  render() {
    return `<${this.tag}>${this.content}</${this.tag}>`;
  }
};
