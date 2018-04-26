class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  start() {
    // using the arrow function allows keeping of original 'this' binding from context
    const timerInterval = setInterval(() => {
      if (this.seconds === 0) {
        clearInterval(timerInterval);
      }
      console.log(this.seconds);
      this.seconds -= 1;
    }, 1000);
  }
}
module.exports = Timer;
