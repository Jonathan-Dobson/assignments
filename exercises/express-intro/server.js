
const express = require('express')
const app = express()
const port = 3004
const data = require('./data.json')
const uuid = require('uuid/v4')
const mongoose = require('mongoose')
const Todos = require('./model/Todos')


app.use(express.json())

mongoose.connect('mongodb://localhost:27017/todos', {useNewUrlParser:true})
    .then(e=>{
        console.log('connected to mongodb')
    })
    .catch(err=>{
        console.log(err);
    })


app.get('/todos',(req,res)=>{
    Todos.find((err,Todo)=>{
        if(err) return res.status(500).send(err)
        return res.status(200).send(Todo)
    })
})

app.post('/todos', (req,res)=>{
    const newTodo = new Todos(req.body)
    newTodo.save(err=>{
        if(err) return res.status(500).send(err)
        return res.status(200).send(newTodo)
    })
    
})

app.delete('/todos/:_id', (req, res) => {
    const _id = req.params._id
    let index = data.findIndex(todo => todo._id === _id )
    console.log(index);
    index!==-1&&data.splice(index, 1)
    res.send(data)
})

app.put('/todos/:_id', (req,res)=>{
    const id = req.params._id
    const {name,description,imageUrl,completed} = req.body
    data.forEach(todo=>todo._id===id&&Object.assign(todo,req.body))
    console.log(data)
    res.send(data)
})




app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})


