// Add event listener to an element by Id (first argument) and run a callback (second argument)
// Prevents the adding of multiple event listeners to the same element. 
// It also saves the callbacks where they will be run when the event is triggered.
class HandleEvents {
    constructor() {
        this.actions = Array()
        this.subscribers = Array()
    }

    addListener(actionElement, eventType) {
        if (this.actions.every(v => v !== actionElement)) {
            document.getElementById(actionElement)
                .addEventListener(eventType, this.publishEvent.bind(this))
            this.actions.push(actionElement)
        }
    }

    publishEvent(event) {
        event.preventDefault()
        this.subscribers
            .forEach(this.runSubscriberCallback.bind(event))
    }

    runSubscriberCallback(subscriber) {
        if (event.target.id === subscriber.event) {
            subscriber.callback({
                event: event,
                target: event.target
            })
        }
    }

    aClickOn(elementId, callback) {
        this.addListener(elementId, 'click')
            this.subscribers.push({
                event: elementId,
                callback: callback
            })
    }
}
// const have = new HandleEvents()

// const {
//     log
// } = console;

// function printTarget(p) {
//     log(p.target)
// }

// function startNewTodo(p) {
//     log("Start A New To Do")

// }





// have.aClickOn('add-todo', startNewTodo)
// have.aClickOn('add-todo', printTarget)

// have.aClickOn('delete-done', printTarget)