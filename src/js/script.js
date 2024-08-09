// *Selectors

const openModal = document.querySelector('.nav__action');
const modal = document.querySelector('.modal__todo');
const closeModal = document.querySelector('.todo__close-btn');
const confirmTodo = document.querySelector('.todo__confirm-btn');
const todoTitleInput = document.querySelector('.todo__title');
const radioButtons = document.querySelectorAll('.radio__button');

const radioButtonsArray = [...radioButtons];

// *Variables

let todos = [];



// *Functions

function openModalFunction() {

    modal.style.display = 'grid';
   
}

function confirmTodoFunction() {
    modal.style.display = 'none';
}

function closeModalFunction() {
    
    modal.style.display = 'none';
    todoTitleInput.value = "";
    radioButtons.forEach(element => element.checked =! true)

}


function todoCreator() {

    let label;
    radioButtons.forEach((element) => {
        if (element.checked === true) {
            label = element.id
        }
    })
    let todoItem = {
        todoTitle:todoTitleInput.value,
        todoLable:label,
    }

    todos.push(todoItem);
    console.log(todos);
    todoTitleInput.value = "";
    radioButtons.forEach(element => element.checked =! true)
}


// *EventListners

openModal.addEventListener('click', openModalFunction);
closeModal.addEventListener('click', closeModalFunction);
confirmTodo.addEventListener('click', confirmTodoFunction);
confirmTodo.addEventListener('click', todoCreator);
