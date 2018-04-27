"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Define class here
var HTMLElement = function () {
  function HTMLElement(tag, content) {
    _classCallCheck(this, HTMLElement);

    this.tag = tag;
    this.content = content;
  }

  _createClass(HTMLElement, [{
    key: "format",
    value: function format() {
      var tag = this.tag;
      var content = this.content;

      return "<" + tag + ">" + content + "<" + tag + "/>";
    }
  }, {
    key: "render",
    get: function get() {
      return this.format();
    }
  }]);

  return HTMLElement;
}();

// Export class here


module.exports = HTMLElement;