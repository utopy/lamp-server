const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()
mongoose.connect("mongodb://localhost:27017/lampdb")
app.use(bodyParser.json())

const Todo = require("./models/todo.js")



app.post("/create-todo", (req, res)=>{
    let data = req.body
    let newTodo = new Todo(data)
    newTodo.save(function(err){
       if(err){
           console.log(err)
           console.log("aaa")
        } else {
           console.log("data")
       }
    })
})

app.post("/get-todos", (req, res)=>{
    console.log("received request")
    Todo.getTodos((err, docs)=>{
        console.log(docs)
    })
})

app.listen(3333, ()=>{
    console.log("listening on port 3333")
})