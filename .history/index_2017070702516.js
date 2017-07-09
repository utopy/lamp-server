const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()
mongoose.createConnection("mongodb://localhost:27017/lamp")
app.use(bodyParser.json())

const Todo = require("./models/todo.js")



app.post("/create-todo", (req, res)=>{
    let data = req.body
    console.log(data)
    let newTodo = new Todo(data)
    newTodo.save((err)=>{
       if(err){console.log(err)}
    })
    res.send({"status": "ok"})
})

app.post("/get-todos", (req, res)=>{
    console.log("received request")
    console.log(Todo.find({}, function(err, docs){
        console.log(docs)
    }))
})

app.listen(3333, ()=>{
    console.log("listening on port 3333")
})