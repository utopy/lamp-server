const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()
mongoose.connect("mongodb://localhost:27017/lampdb")
app.use(bodyParser.json())

const Todo = require("./models/todo.js")



app.post("/create-todo", (req, res)=>{
    let data = req.body
    Todo.createTodo(data, (err, res)=>{
        if(err){
            console.log(err)
        } else {
            console.log(res)
            res.send({"status": "ok"})
        }
    })
})

app.post("/get-todos", (req, res)=>{
    console.log("received request")
    Todo.getTodos((err, docs)=>{
        console.log(docs)
        res.send({"status": "ok", "data": docs })
    })
})

app.listen(3333, ()=>{
    console.log("listening on port 3333")
})