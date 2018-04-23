// Refactor to use ES6 classes
module.exports = class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  start() {
    this.timer = setInterval(() => {
      if (this.seconds === 0) {
      // eslint-disable-next-line no-console
        console.log('Done!');
        clearInterval(this.timer);
        return;
      }

      // eslint-disable-next-line no-console
      console.log(`${this.seconds}!`);
      this.seconds -= 1;
    }, 1000);
  }
};
