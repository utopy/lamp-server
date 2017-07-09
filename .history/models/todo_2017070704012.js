const mongoose = require("mongoose")
const Schema = mongoose.Schema



let todoSchema = new Schema({
    created: {type: Number, required: false},
    title: {type: String, required: true},
    completed: {type: Boolean, default: false},
    priority: {type: Number, default: 1},
    expiration_date: {type: Number, default: 0},
    descriptin: {type: String},
    category: {type: String}
})

todoSchema.pre('save', function(next){
    if(!this.created){
        this.created = Date.now()
    }
})

let Todo = module.exports = mongoose.model("Todo", todoSchema);
