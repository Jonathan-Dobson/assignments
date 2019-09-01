const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    imageUrl: String,
    completed: {
        type: Boolean,
        default: false
    },
})

module.exports = mongoose.model('Todos', todoSchema)