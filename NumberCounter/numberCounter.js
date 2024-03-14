const plusBtn = document.getElementById("plusBtn")
const minusBtn = document.getElementById("minusBtn")
const number = document.getElementById("number")
const reset = document.getElementById("reset")


plusBtn.addEventListener('click',()=>{
  console.log(Number(number.textContent))
  let numerical = Number(number.textContent)
  numerical++
  number.textContent = numerical
})
minusBtn.addEventListener('click',()=>{
    console.log(Number(number.textContent))
    let numerical = Number(number.textContent)
    numerical--
    number.textContent = numerical
})
reset.addEventListener('click',()=>{
    number.textContent = 0
})