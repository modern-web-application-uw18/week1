
// Define class here
class HTMLElement {
    constructor(tag, content) {    
      this.tag = tag;
      this.content = content;
    }
    render() {
        let open = '<' + this.tag + '>';
      let close = '</' + this.tag + '>';
      return open + this.content + close;
    }
  }
  
const newIdea = new HTMLElement("p","So nice to see you!")
console.log(newIdea.render());

// Export class here
module.exports = HTMLElement;
