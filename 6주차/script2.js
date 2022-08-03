const content = "Typing Effect"
const text = document.querySelector(".text")
let index = 0;

function typing(){
  text.textContent += content[index++];
  if(index > content.length){
    text.textContent = ""
    indext = 0;
  }
}

setInterval(typing, 300)