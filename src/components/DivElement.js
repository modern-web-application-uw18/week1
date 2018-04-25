const HTMLElement = require("./HTMLElement");
const Divstuff = new DivElement("This is content from DivElement.js. This could be used for composing content that needs to be updated from a db and then spat out to different pages. Handy!"); 

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    ("div", content);
 }
}
console.log("test output from DivElement: ", Divstuff.render());
// Export class here
module.exports = {DivElement};
