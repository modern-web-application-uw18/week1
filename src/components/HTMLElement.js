// Define class here
class ELMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }
  render() {
    return `<${this.tag}>${this.content}</${this.tag}>`;
  }
}

/* let foo = new HTMLElement("div", "goodbye");
console.log(foo);
let htmlString = foo.render();
console.log(htmlString); */

// Export class here
module.exports = {};
module.exports = HTMLElement;
