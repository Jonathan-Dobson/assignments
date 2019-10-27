const mongoose = require('mongoose')
const Schema = mongoose.Schema

const petSchema = new Schema({
    species: {
        type: String,
        required: true,
        enum: ["dog", "cat"]
    },
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        default: "unknown"
    }

})

module.exports = mongoose.model("Pet", petSchema)