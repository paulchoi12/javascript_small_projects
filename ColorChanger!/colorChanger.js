const btn = document.getElementById("btn")
const colour = document.querySelector(".Color")



btn.addEventListener("click", function (){
const newColour = getRGBrandom()
document.body.style.backgroundColor = newColour
colour.textContent = newColour
})


//gets the random rgb and converts into string format!
function getRGBrandom() {
    let arr = []
    for(let i = 0; i <3; i++){
        arr.push(Math.floor(Math.random()*1000))
    }
   return `rgba(${arr[0]}, ${arr[1]}, ${arr[2]})`
}
