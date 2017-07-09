const mongoose = require("mongoose")
const Schema = mongoose.Schema

let todoSchema = new Schema({
    created: {type: Number, required: true},
    title: {type: String, required: true},
    completed: {type: Boolean, default: true},
    priority: {type: Number, default: 1},
    expiration_date: {type: Number, default: 0},
    descriptin: {type: String}
})

let Todo = mongoose.model("Todo")
module.exports = Todo