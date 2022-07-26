let minutes = 0;
let seconds = 0;
let tenMillis = 0;
const appendTens = document.getElementById("tenMillis");
const appendSeconds = document.getElementById("seconds");
const appendMinutes = document.getElementById("minutes");
const buttonStart = document.getElementById("bt__start");
const buttonStop = document.getElementById("bt__stop");
const buttonReset = document.getElementById("bt__reset");

buttonStart.onclick = function(){
  setInterval(operateTimer, 10)
}

function operateTimer(){
  tenMillis++;
  appendTens.textContent = tenMillis > 9 ? tenMillis : '0' + tenMillis
  if(tenMillis>99){
    seconds++;
    appendSeconds.textContent = seconds > 9 ? seconds : '0' + seconds
    tenMillis = 0
    appendTens = "00"
  }
  if(seconds > 59){
    minutes++;
    appendMinutes.textContent = minutes > 9 ? minutes : '0' + minutes
    seconds = 0
    appendSeconds.textContent = "00"
  }
}
