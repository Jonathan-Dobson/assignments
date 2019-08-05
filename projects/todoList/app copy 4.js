const log = console.log;

class Modal {
    constructor(elementId) {
        this.modal = document.getElementById(elementId)
    }
    show(){
        log(this.modal)
        this.modal.style.display = ''
    }
    hide(){
        log(this)
        this.modal.style.display = 'none'
    }
}

let newTodoModal = new Modal('new-todo-modal')


document.body.addEventListener('click', e => {
    switch (e.target.id) {
        case 'add-todo':
            newTodoModal.show()
            break;
        case 'cancel-add-new':
            newTodoModal.hide()


    }
    log(e.target.id)
})

