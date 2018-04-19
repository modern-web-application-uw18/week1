class Timer{
  constructor(seconds){
    this.seconds = seconds;
  }

  start(){
    let seconds = this.seconds;
    let timerInterval = setInterval(function(){
      if(seconds === 0){
        clearInterval(timerInterval);
      }
      console.log(seconds);
      seconds -= 1;
    }, 1000);
  }

}

module.exports = Timer;
