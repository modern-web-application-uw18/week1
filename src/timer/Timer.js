function Timer(seconds) {
  this.seconds = seconds;
  class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }
  start() {
    const timerInterval = setInterval(() => {
      if (this.seconds === 0) {
        clearInterval(timerInterval);
      }
      console.log(this.seconds);
        this.seconds -= 1;
    }, 1000);
  }
 }


Timer.prototype.start = function() {
  var instance = this;
  var timerInterval = setInterval(function() {
    if (instance.seconds === 0) {
      clearInterval(timerInterval);
    }
module.exports = Timer;
    
    console.log(instance.seconds);
    instance.seconds -= 1;
  }, 1000);
};

module.exports = Timer;
