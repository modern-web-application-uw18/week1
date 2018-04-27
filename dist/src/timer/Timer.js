"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// function doWork(obj) {
//   obj.tick = setInterval(() => {
//     if (obj.seconds === 0) {
//       clearInterval(obj.tick);
//     }
//     console.log(obj.seconds);
//     obj.seconds -= 1;
//   }, 1000);
// }

var Timer = function () {
  function Timer(seconds) {
    _classCallCheck(this, Timer);

    this.seconds = seconds;
  }

  _createClass(Timer, [{
    key: "start",
    value: function start() {
      var _this = this;

      this.tick = setInterval(function () {
        if (_this.seconds === 0) {
          clearInterval(_this.tick);
        }
        console.log(_this.seconds);
        _this.seconds -= 1;
      }, 1000);
    }
  }]);

  return Timer;
}();

exports.default = Timer;