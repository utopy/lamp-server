const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const todo = require("./models/todo.js")
const app = express()
mongoose.createConnection("mongodb://localhost/lamp")
app.use(bodyParser.json())

