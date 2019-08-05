const have = new HandleEvents()

const {
    log
} = console;

have.aClickOn('add-todo', startNewTodo)

function startNewTodo(p) {
    log("Start A New To Do")
}

have.aClickOn('delete-the-done-list', (e) => {
    function modal(action) {
        document.getElementById('delete-done-confirmation')
            .style.display = action === 'on' ? '' : 'none'
    }

    modal('on')

    have.aClickOn('delete-proceed', () => modal('off'))
    have.aClickOn('delete-cancel', () => modal('off'))
})

have.aClickOn('add-todo', (e) => {
    function modal(action) {
        document.getElementById('new-todo-modal')
            .style.display = action === 'on' ? '' : 'none'
    }

    modal('on')

    have.aClickOn('add-new-proceed', () => modal('off'))
    have.aClickOn('add-new-cancel', () => {
        modal('off')
        log(event)
    })
})
