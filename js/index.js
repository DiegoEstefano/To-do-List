// Selecação de
const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-input')
const todoList = document.querySelector("#todo-list")
const editForm = document.querySelector('#edit-form')
const editInput = document.querySelector('#edit-input')
const cancelButton = document.querySelector('#cancel-edit-btn')

let oldInputValue

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
const toggleForms = () => {
    editForm.classList.toggle("hide")
    todoForm.classList.toggle("hide")
    todoList.classList.toggle("hide")
}

const updateTodo = (text) => {
    const todos = document.querySelectorAll(".todo");
  
    todos.forEach((todo) => {
      let todoTitle = todo.querySelector("h3");
  
      if (todoTitle.innerText === oldInputValue) {
        todoTitle.innerText = text;
  
        // Utilizando dados da localStorage
        updateTodoLocalStorage(oldInputValue, text);
      }
    });
  };
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
    let todoTitle;

    if (parentEl && parentEl.querySelector("h3")) {
        todoTitle = parentEl.querySelector("h3").innerText;
    }



    if (targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done")
        console.log(parentEl)
    }
    if (targetEl.classList.contains("remove-todo")) {
        parentEl.remove()
    }
    if (targetEl.classList.contains("edit-todo")) {
        toggleForms()

        editInput.value = todoTitle
        oldInputValue = todoTitle
    }
});


cancelButton.addEventListener("click", (e) => {
    e.preventDefault()

    toggleForms()
})

editForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const editInputValue = editInput.value

    if (editInputValue) {
        // Atualizando
        updateTodo(editInputValue)
    }

    toggleForms()
})
