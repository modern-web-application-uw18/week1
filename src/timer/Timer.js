class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }
  start() {
    let e = this.seconds;
    const timerInterval = setInterval(() => {
      if (e === 0) {
        clearInterval(timerInterval);
      }
      console.log(e);
      e -= 1;
    }, 1000);
  }
}

module.exports = Timer;
