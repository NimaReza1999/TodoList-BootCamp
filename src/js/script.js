// *Selectors

const openModal = document.querySelector('.nav__action');
const modal = document.querySelector('.modal__todo');
const closeModal = document.querySelector('.todo__close-btn');
const confirmTodo = document.querySelector('.todo__confirm-btn');
const todoTitleInput = document.querySelector('.todo__title');
const radioButtons = document.querySelectorAll('.radio__button');

const radioButtonsArray = [...radioButtons];



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

function selectOneRadioButton(element) {
    
    // console.log (element.target.id)
}

function todoCreator() {

}


// *EventListners

openModal.addEventListener('click', openModalFunction);
closeModal.addEventListener('click', closeModalFunction);
confirmTodo.addEventListener('click', confirmTodoFunction);
radioButtons.forEach((element) => {
    element.addEventListener('click', selectOneRadioButton);
})