class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  start() {
    // const instance = seconds; // previously var
    const timerInterval = setInterval(() => { // previously var
      if (this.seconds === 0) {
        clearInterval(timerInterval);
      }

      this.seconds -= 1;
    }, 1000);
  }
}
module.exports = Timer;
// export default Timer;
// original code
// function Timer(seconds) {
//   this.seconds = seconds;
// }
//
// Timer.prototype.start = function newName() {
//   const instance = this; // previously var
//   const timerInterval = setInterval(() => { // previously var
//     if (instance.seconds === 0) {
//       clearInterval(timerInterval);
//     }
//
//     // console.log(instance.seconds);
//     instance.seconds -= 1;
//   }, 1000);
// };
//
// module.exports = Timer;
//
