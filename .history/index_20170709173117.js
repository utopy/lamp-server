const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


const Todo = require("./models/todo.js")
const actions = require("./models/actions.js")



app.post("/create-todo", (req, res)=>{
    console.log("received")
    let body = JSON.parse(Object.keys(req.body))
    console.log(body)
    
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