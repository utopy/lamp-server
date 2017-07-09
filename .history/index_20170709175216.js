const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    next()
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


const Todo = require("./models/todo.js")
const actions = require("./models/actions.js")



app.post("/create-todo", (req, res)=>{
    let body = JSON.parse(Object.keys(req.body))
    actions.createTodo(body, (err, docs)=>{
        console.log(docs)
    })
})
app.post("/get-todos", (req, res)=>{
    console.log("received request")
    actions.getTodos((err, docs)=>{
        console.log(docs)
        res.send("ciao")
    })
})

app.listen(3333, ()=>{
    console.log("listening on port 3333")
})