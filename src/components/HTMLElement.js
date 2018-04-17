// Define class here
class HTMLElement {
  
  // constructor
  constructor (tag, content) {
    this.tag = tag;
    this.content = content;
  }
  // Render Method
  render() {
    return var str = `<$(tag)> $(content) </$(tag)>`;
  }
}
// Export class here
module.exports = {};
