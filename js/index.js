// Selecação de
const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-input')
const todoList = document.querySelector("#todo-list")
const editForm = document.querySelector('#edit-form')
const editInput = document.querySelector('#edit-input')
const cancelButton = document.querySelector('#cancel-edit-btn')

//Funções

const saveTodo = (text) => {
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    const texto = document.createTextNode(text)
    // todoTitle.innerText = text
    todoTitle.appendChild(texto)
    todo.appendChild(todoTitle)

    // Criação dos botões
    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn)

    const removeBtn = document.createElement("button")
    removeBtn.classList.add("remove-todo")
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(removeBtn)

    // Adiciona todo o todo para a lista
    todoList.appendChild(todo)

    todoInput.value = " "
    todoInput.focus()
}

//Eventos

// 1 - Salvando o valor do input
todoForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const inputValue = todoInput.value;
    if (inputValue) {
        saveTodo(inputValue)
    }
})

document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div")

    if (targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done")
        console.log(parentEl)
    }

    if (targetEl.classList.contains("remove-todo")) {
        parentEl.remove()
    }
    if (targetEl.classList.contains("edit-todo")) {
        
    }
   
});



