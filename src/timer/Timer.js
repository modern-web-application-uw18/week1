class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }
  start() {
    const instance = this;
    const timerInterval = setInterval(() => {
      if (instance.seconds === 0) {
        clearInterval(timerInterval);
      }
      console.log(instance.seconds);
      instance.seconds -= 1;
    }, 1000);
  }
}

module.exports = Timer;
// export default Timer; // ES6 unsupported by node -v 8

/* 1-3 Timer object is created
   Timer prototype method is added that uses setInterval to countdown
   for each instance, console.log the seconds,
   export the time object so it can be imported by runTimer.
*/
