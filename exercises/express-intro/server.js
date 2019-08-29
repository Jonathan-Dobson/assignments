const express = require('express')
const app = express()
const port = 3004
const data = require('./data.json')
const uuid = require('uuid/v4')

app.use(express.json())

app.get('/todos',(req,res)=>{
    res.send(data)
})

app.post('/todos', (req,res)=>{
    const {name,description,imageUrl,completed} = req.body
    data.push({name,description,imageUrl,completed,id: uuid()})
    console.log(data);
    res.send(data)
})

app.delete('/todos/:_id', (req,res)=>{
    const index = data.findIndex(todo=>todo._id===req.params._id)
    if(index>=0){data.splice(index,1)}
    else res.send({res: 'item does not exist'})
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


