// *Selectors

const openModal = document.querySelector('.nav__action');
const modal = document.querySelector('.modal__todo');
const closeModal = document.querySelector('.todo__close-btn');
const confirmTodo = document.querySelector('.todo__confirm-btn');


// *Functions

function openModalFunction() {

    modal.style.display = 'grid';
   
}

function confirmTodoFunction() {
    modal.style.display = 'none';
}

function closeModalFunction() {
    
    modal.style.display = 'none';
}

// *EventListners

openModal.addEventListener('click', openModalFunction);
closeModal.addEventListener('click', closeModalFunction);
confirmTodo.addEventListener('click', confirmTodoFunction);