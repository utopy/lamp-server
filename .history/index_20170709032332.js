const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const level = require("level")
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const Todo = require("./models/todo.js")
var db = level('./db/')


app.post("/create-todo", (req, res)=>{
    console.log("received")
    let obj = JSON.parse(Object.keys(req.body))
    
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