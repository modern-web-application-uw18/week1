class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }
  start() {
    const timerInterval = setInterval(() => {
      if (this.seconds === 0) {
        clearInterval(timerInterval);
      }

      this.seconds += 1;
    }, 1000);
  }
}
module.exports = Timer;
