const log = console.log;

class Modal {
    constructor(elementId) {
        this.modal = document.getElementById(elementId)
    }
    show(){
        this.modal.style.display = ''
    }
    hide(){
        this.modal.style.display = 'none'
    }
}

const newTodoModal = new Modal('new-todo-modal')
const deleteDoneTodosModal = new Modal('delete-done-confirmation-modal')
const todoForm = document.getElementById('new-todo-form')


document.body.addEventListener('click', e => {
    switch (e.target.id) {
        case 'add-todo':
            newTodoModal.show()
            break;
        case 'cancel-add-new':
            newTodoModal.hide()
            clearForm()
            break;
        case 'save-add-new':
            newTodoModal.hide()
            break;
        case 'delete-the-done-list':
            deleteDoneTodosModal.show()
            break;
        case 'delete-all-proceed':
            deleteDoneTodosModal.hide()
            break;
        case 'delete-all-cancel':
            deleteDoneTodosModal.hide()
    }
    // log(e.target.id)
})


function clearForm(){
    let form = todoForm.children
    for(let i=0;i<form.length;i++){
        form[i].value=null;
    }
    todoForm.completed.value = false
}
