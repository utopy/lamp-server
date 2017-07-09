const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()
mongoose.createConnection("mongodb://localhost/lamp")
app.use(bodyParser.json())

const Todo = require("./models/todo.js")



app.post("/create-todo", (req, res)=>{
    console.log(req.body)
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
    Todo.find({}, (err, docs)=>{
        if(err){console.log(err)} else {
            console.log(docs)
        }

        res.send({"status": "ok"})
    })
})

app.listen(3333, ()=>{
    console.log("listening on port 3333")
})