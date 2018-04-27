// Define class here
module.exports = class HTMLElement {
  contructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }
  render() {
    return `<${this.tag}> ${this.content} </${this.tag}>`;
  }
};
