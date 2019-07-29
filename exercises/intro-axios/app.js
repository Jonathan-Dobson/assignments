const {
    log
} = console

const config = {
    name: 'jonathan'
}



const form = document.addTodo
form.addEventListener('submit', e => {
    e.preventDefault()
    let newTodo = {title:form.title.value}
    axios.post(`https://api.vschool.io/${config.name}/todo/`,newTodo).then(res => {
        log(res.data)
        addTodoLi(form.title.value)
    })
})

function addTodoLi(text){
    let li = document.createElement('li')
    li.textContent = text
    let ul = document.getElementById('list')
    ul.appendChild(li)
}

function getTodos() {

    axios.get(`https://api.vschool.io/${config.name}/todo/`).then(res => {
        res.data.forEach(e => {
            let li = document.createElement('li')
            if(e.completed){
                let strike = document.createElement('strike')
                strike.textContent = e.title
                li.appendChild(strike)
            }else{
                li.textContent = e.title
            }

            let ul = document.getElementById('list')
            ul.appendChild(li)

            // log([
            //     e.title,
            //     e.sessionId,
            //     e._id,
            //     e.completed
            // ])
        })
    }).catch(e => {
        log(e)
    })
}
getTodos()


































































// POST
// axios.post('http://api.vschool.io/jonathan/todo/', newTodo).then(res=>{
//     // log(res)
// })

// GET
// function getTodo(name){
//     axios.get(`http://api.vschool.io/${name}/todo`).then(res=>{
//         log(res)
//         return res
//     })
// }

// PUT
// const id = '5d3f1883f13a5b4272715058'
// const editedTodo = {
//     completed: true
// }
// axios.put(`http://api.vschool.io/jonathan/todo/${id}`, editedTodo).then(res=>{
//     log(res)
// })

// DELETE
// axios.delete(`http://api.vschool.io/sam/todo/${id}`)