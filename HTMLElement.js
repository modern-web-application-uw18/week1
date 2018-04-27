// Define class here
class HTMLElement {
  constructor(tag, element) {
    this.tag = tag;
    this.element = element;
  }
  render() {
    return `<${this.tag}>${this.element}</${this.tag}>`;
  }
}

const p = new HTMLElement('p', 'doing something here');
console.log(p.render());


// Export class here
module.exports = HTMLElement;
