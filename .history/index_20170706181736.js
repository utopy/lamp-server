const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")


const app = express()
mongoose.connect('mongodb://localhost/lamp');
app.use(bodyParser.json())

