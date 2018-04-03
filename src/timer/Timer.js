function Timer(seconds) {
  this.seconds = seconds;
}

Timer.prototype.start = function() {
  var instance = this;
  var timerInterval = setInterval(function() {
    if (instance.seconds === 0) {
      clearInterval(timerInterval);
    }

    console.log(instance.seconds);
    instance.seconds -= 1;
  }, 1000);
};

module.exports = Timer;
