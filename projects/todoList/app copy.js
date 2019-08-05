const subscribers = Array()

function addListener(action, eventType){
    document.getElementById(action).addEventListener(eventType, publishEvent)
}

function publishEvent(event) {
    event.preventDefault()
    subscribers.forEach(runSubscriberCallback.bind(event))
}

function runSubscriberCallback(subscriber) {
    if (event.target.id === subscriber.event) {
        subscriber.callback({
            event: event,
            target: event.target
        })
    }
}

function onClick(elementId, callback) {
    addListener(elementId,'click')
    subscribers.push({
        event: elementId,
        callback: callback
    })
}



const {
    log
} = console;

function printTarget (p){
    log(p.target)
}

onClick('add-todo',printTarget)
onClick('delete-done',printTarget)

