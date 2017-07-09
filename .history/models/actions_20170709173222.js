const neDB = require("nedb")
const DB = new neDB({filename:'../db/db', autoload: true})
const id = require('shortid')
let actions = {}
actions.getTodos = ()=>{
    console.log("get")
    DB.find({})
}
module.exports = actions