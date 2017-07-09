const neDB = require("nedb")
const DB = new neDB({filename:'../db/db'})
const id = require('shortid')
let actions = {}
actions.getTodos = ()=>{
    DB.find
}
module.exports = actions