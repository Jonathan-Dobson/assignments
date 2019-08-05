// Add event listener to an element by Id (first argument) and run a callback (second argument)

class HandleEvents {
    constructor(){
        this.subscribers = Array()
    }

    addListener(action, eventType){
        document.getElementById(action).addEventListener(eventType, this.publishEvent.bind(this))
    }
    
    publishEvent(event) {
        event.preventDefault()
        this.subscribers.forEach(this.runSubscriberCallback.bind(event))
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
        this.addListener(elementId,'click')
        this.subscribers.push({
            event: elementId,
            callback: callback
        })
    }
}
const have = new HandleEvents()

const {
    log
} = console;

function printTarget (p){
    log(p.target)
}

function startNewTodo(p){
    log("Start A New To Do")
    
}





have.aClickOn('add-todo',startNewTodo)
have.aClickOn('delete-done',printTarget)

