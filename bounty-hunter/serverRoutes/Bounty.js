const express = require('express');
const bountyRouter = express.Router();
const People = require("../models/People");


bountyRouter.route('/')
    .get((req,res)=>{
        People.find((err, people) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(people);
        });
    })
    .post((req,res)=>{
        const newPerson = new People(req.body);
        newPerson.save(err => {
            if (err) return res.status(500).send(err);
            return res.status(201).send(newPerson);
        })


    })

bountyRouter.route('/:id')
    .put((req,res)=>{
        People.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true},
            (err, person) => {
                if (err) return res.status(500).send(err);
                return res.send(person);
            }
        )
    })
    .delete((req,res)=>{
        People.findByIdAndRemove(req.params.id, (err, person) => {
            if (err) return res.status(500).send(err);
            const response = {
                message: "successfully deleted",
                id: person._id
            };
            return res.status(200).send(response);
        });

    })

    // app.get('/bounty',(req,res)=>{
    //     console.log(data)
    //     res.send(data)
    // })
    
    // app.post('/bounty', (req,res)=>{
    //     const {name,description,imageUrl,completed} = req.body
    //     data.push({name,description,imageUrl,completed,_id: uuid()})
    //     res.send(data)
    // })
    
    // app.delete('/bounty/:_id', (req, res) => {
    //     const _id = req.params._id
    //     let index = data.findIndex(todo => todo._id === _id )
    //     console.log(index);
    //     index!==-1&&data.splice(index, 1)
    //     res.send(data)
    // })
    
    // app.put('/bounty/:_id', (req,res)=>{
    //     const id = req.params._id
    //     const {name,description,imageUrl,completed} = req.body
    //     data.forEach(todo=>todo._id===id&&Object.assign(todo,req.body))
    //     res.send(data)
    // })


module.exports = bountyRouter;