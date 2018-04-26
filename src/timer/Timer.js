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
    }, 250);
  }
}

module.exports = Timer;
