// Define class here
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }
  // let tag = this.tag;
  // let content = this.content;
  render() {
    // if(this.tag === 'img' || this.tag == 'br' || this.tag === 'link'){
    //   console.log("singular tag");
    //   return "<" + this.tag + " " + this.content + ">";
    // }  future work on singular tags
    // else{

    return `<${this.tag}>${this.content}</${this.tag}>`;
    // }
  }
}

// Export class here
module.exports = { };
