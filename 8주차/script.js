const numbersDiv = document.querySelector(".numbers")
const oneButton = document.querySelector("#one")
const resetButton = document.querySelector("#reset")
const fiveButton = document.querySelector("#five")

const lottoNumbers = []
const colors = ["tomato", "teal", "orange", "purple", "blue"]

function paintNumber(number){
  const eachNunDiv = document.createElement("div")
  let colorIndex = Math.floor(number / 10)
  eachNunDiv.classList.add('eachnum')
  eachNunDiv.style.backgroundColor = colors[colorIndex]
  eachNunDiv.textContent = number
  numbersDiv.appendChild(eachNunDiv)
}

oneButton.addEventListener("click", function(){
  while(lottoNumbers.length < 6){
    let ran = Math.floor(Math.random() * 45) + 1
    if(lottoNumbers.indexOf(ran) === -1){
      lottoNumbers.push(ran)
      paintNumber(ran)
    }
  }
})

fiveButton.addEventListener("click", function(){
  while(lottoNumbers.length < 6){
    let ran = Math.floor(Math.random() * 45) + 1
    if(lottoNumbers.indexOf(ran) === -1){
      lottoNumbers.push(ran)
      paintNumber(ran)
    }
  }
})


resetButton.addEventListener("click", function(){
  lottoNumbers.splice(0,6)
  numbersDiv.innerHTML = ""
})