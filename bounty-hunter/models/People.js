const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PeopleSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
        },
    living: {
        type: Boolean,
    },
    bounty: {
        type: Number,
        default: 0
    },
    skill: {
        type: String,
        enum: ['Jedi', 'Sith', 'Other']
    }
})

module.exports = mongoose.model('People', PeopleSchema)