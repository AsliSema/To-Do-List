const add = document.querySelector(".to-do-input")
const toDoList = document.querySelector(".to-do-list")
const checkboxes = document.querySelectorAll(".to-do-items")

console.log(typeof(toDoList))

function addToDo(e) {
    e.preventDefault() //that's going to stop the page from reloading. Because by default, a form is just going to reload the page or send the data to an external source, generally what's your server side.
    const writeToDo = this.querySelector("[type=text]")

    toDoList.innerHTML += `
    <li class="to-do-items">
    <div class="to-do">
        <span>${writeToDo.value}</span>
    </div>
        <input type="button" class="buttons" value="Delete">
    </li>
    `

    console.log(toDoList)
    console.log(typeof (toDoList))
    localStorage.setItem("toDoList", toDoList.innerHTML)
    this.reset()
}



function checkedAndDelete(e) {
    if (e.target.tagName === "SPAN" ) {
        e.target.parentElement.classList.toggle("checkClass")
        e.target.parentElement.parentElement.classList.toggle("background")
        console.log(toDoList)
        localStorage.setItem("toDoList", toDoList.innerHTML)
    }

    if (e.target.tagName === "INPUT" && e.target.type === "button") {
        e.target.parentElement.remove()
        localStorage.setItem("toDoList", toDoList.innerHTML)
    }
    
}

toDoList.innerHTML = localStorage.getItem("toDoList")


toDoList.addEventListener("click", checkedAndDelete)
add.addEventListener("submit", addToDo)

