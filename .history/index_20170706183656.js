const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const todo = require("./models/todo.js")
const app = express()
mongoose.createConnection("mongodb://localhost/lamp")
app.use(bodyParser.json())



app.post("/create-todo", (req, res)=>{
    console.log(req.body)
})

app.listen(3333, ()=>{
    console.log("listening on port 3333")
})