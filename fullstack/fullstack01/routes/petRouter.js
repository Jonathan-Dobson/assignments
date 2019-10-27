const express = require('express')
const petRouter = express.Router()
const Pet = require('../models/pet')

petRouter.get("/", (req, res, next) => {
    Pet.find((err, pets) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res
            .status(200)
            .send(pets)
    })
})

petRouter.post("/", (req, res, next) => {
    const newPet = new Pet(req.body)
    newPet.save((err, newSavedPed) => {
        if (err) {
            res
                .status(500)
                .send(err)
        }
        return res
            .status(201)
            .send(newSavedPet)
    })

})

module.exports = petRouter