const {
    log
} = console

const config = {
    name: 'jonathan'
}

const todoData = {}
// DELETE and PUT
const listOfTodos = document.getElementById('list')
listOfTodos.addEventListener('click', e=>{
    let item = e.target.parentNode.parentNode.parentNode
    log(e.target.parentNode.parentNode.parentNode)
    if(e.target.parentNode.id==='delete-button'){
        axios.delete(`https://api.vschool.io/${config.name}/todo/${e.target.id}`).then(res=>{
            item.className = "mdl-list__item slide-left"
            setTimeout(function(){
                item.remove()
            },500)
        })
    }else if(e.target.textContent==='check_box_outline_blank'){
        axios.put(`https://api.vschool.io/${config.name}/todo/${e.target.parentNode.id}` , {completed: true}).then(res=>{
            getTodos()
        })
    }else if(e.target.textContent==='check_box'){
        axios.put(`https://api.vschool.io/${config.name}/todo/${e.target.parentNode.id}` , {completed: false}).then(res=>{
            getTodos()
        })
    }
})

// FORM SUBMIT HANDLER to POST TO API
const form = document.addTodo
form.addEventListener('submit', e => {
    e.preventDefault()

    let newTodo = {
        title: form.title.value,
        description: form.description.value,
        price: form.price.value,
        imgUrl: form.imgUrl.value,
        completed: form.completed.checked
    }
    axios.post(`https://api.vschool.io/${config.name}/todo/`, newTodo).then(res => {
        log(res.data)
        getTodos()
        addedToast(form.title.value)
    })
})

function addedToast(msg){
    var snackbarContainer = document.querySelector('#demo-toast-example');
    var data = {message: 'Added Todo: ' + msg };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
}


// GET TODOS FROM API
function getTodos() {
    axios.get(`https://api.vschool.io/${config.name}/todo/`).then(res => {
        updateTodoList(res.data)
    })
}

function updateTodoList(data){
    let tbody = document.getElementById('list')
    clearUL(tbody)
    data.forEach((e,i)=>{
        let tr = document.createElement('div')
        if(e.completed){
            notdone = "hide"
            donebox = ""
            title = `<strike>${e.title}</strike>`
            tr.className = "mdl-list__item done"
        }else{
            notdone = ""
            donebox = "hide"  
            title = e.title
            tr.className = "mdl-list__item"
        }

        let bgColorBottom = `rgba(83, 50, 167, 0.7)`;
        let bgColorTop = `rgba(83, 50, 167, 0.4)`;
        tr.innerHTML = `
        <div>
        <div class="list-element">
            <button id="${e._id}" class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored ">
                <i class="material-icons ${notdone}">check_box_outline_blank</i>
                <i class="material-icons ${donebox}">check_box</i>
            </button>
        </div>
        <p class="list-element">
            <span>${title}</span>
        </p>
        <p class="list-element">${e.price!==null?('$'+e.price):""}</p>
        <p class="list-element">
            <i class="todo-description">${e.description||!undefined&&""}</i>
        </p>
    </div>
    
    <!-- Right side -->
    <div class="list-element right">
        <button id="delete-button"
            class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
            <i class="material-icons">edit</i>
        </button>
        <button id="delete-button"
            class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
            <i id="${e._id}" class="material-icons">backspace</i>
        </button>
    </div>
        `
        tr.id = e._id
        tr.style.background = `linear-gradient(${bgColorTop}, ${bgColorBottom}),top left / contain no-repeat url(${e.imgUrl})`
        tbody.appendChild(tr)

    })
}

function clearUL(ul){
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
}

    // res.data.forEach(e => {
    // let str = `${e.title!=undefined?e.title:'-'}
    // - ${e.description!=undefined?e.description:'---'} 
    // - ${e.price!=undefined?'$'+e.price:'ask for price'}`
    // if(e.completed){
    //     let strike = document.createElement('strike')
    //     strike.textContent = str
    //     li.appendChild(strike)
    // }else{
    //     li.textContent = str
    // }

    // let img = document.createElement('img')
    // try {
    //     let imgUrl = new URL(e.imgUrl)
    //     img.src = imgUrl
    //     li.appendChild(img)
    //     log(imgUrl)
    // } catch (error) {}


    // ul.appendChild(li)

    // log([
    //     e.title,
    //     e.sessionId,
    //     e._id,
    //     e.completed
    // ])
    // })
    // }).catch(e => {
    // log(e)
    // })



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