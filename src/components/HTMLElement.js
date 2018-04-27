// Define class here
module.exports = class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }
  render() {
    const ret = `<${this.tag}>${this.content}</${this.tag}>`; // this one does not work
    // const ret = '<' + this.tag + '>' + this.content + '</' + this.tag + '>';
    return ret;
  }
};
// Export class here
// module.exports = HTMLElement;
