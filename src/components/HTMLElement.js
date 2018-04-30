// @flow
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }
  // Render Method
  render() {
    return `<${this.tag}>${this.content}</${this.tag}>`;
  }
}
// Export class here
module.exports = HTMLElement;
