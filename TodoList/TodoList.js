const addButton = document.getElementById("addButton")
const closeButton = document.getElementsByClassName("closeButton")

const todoList = document.getElementById("todoList")




addButton.addEventListener("click", ()=>{
    console.log(closeButton.length)
    

//create new thing and its text inside
const newThing = document.createElement("li")
const newThingText = document.createTextNode(todo.value)
//putting the new text inside the new thing
newThing.appendChild(newThingText)

//creating the close button with X text inside
const closeItem = document.createElement("button")
const closeItemText = document.createTextNode("X")
closeItem.className = "closeButton"
closeItem.appendChild(closeItemText)
//placing the button inside the li
newThing.appendChild(closeItem)

for(let i = 0; i < closeButton.length; i++){
    closeButton[i].addEventListener("click", ()=>{
        console.log("this work!", closeButton[i])
    })
}

//putting the newthing with new text inside the list
todoList.appendChild(newThing)
})



