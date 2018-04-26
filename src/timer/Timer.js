class Timer {
  constructor(seconds){
  this.seconds = seconds;
}
}

Timer.start = function() {
  const instance = this;
  const timerInterval = setInterval(function() {
    if (instance.seconds === 0) {
      clearInterval(timerInterval);
    }

    console.log(instance.seconds);
    instance.seconds -= 1;
  }, 1000);
};

module.exports = Timer;
