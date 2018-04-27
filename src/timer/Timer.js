
class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }
  start() {
    this.tick = setInterval(() => {
      if (this.seconds === 0) {
        clearInterval(this.tick);
      }
      console.log(this.seconds);
      this.seconds -= 1;
    }, 1000);
  }
}

export default Timer;
