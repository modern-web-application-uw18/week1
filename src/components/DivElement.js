const HTMLElement = require("./HTMLElement");
const Divstuff = new DivElement("This is content from DivElement.js") 

// Define class here
class DivElement extends HTMLElement {
 constructor(content) {("div", content);
 }
}
// Export class here
module.exports = {DivElement};
