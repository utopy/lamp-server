const neDB = require("nedb")
const DB = new neDB({filename:'../db/db.json'})
const id = require('shortid')
let actions = {}
actions.getTodos = ()=>{
    
}
module.exports = actions