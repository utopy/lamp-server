const neDB = require("nedb")
const DB = new neDB({filename:'../db/db', autoload: true})
const id = require('shortid')
let actions = {}
actions.getTodos = (callback)=>{
    console.log("get")
    DB.find({}, (err, docs)=>{
        if(err){
            callback(err)
        } else {
            callback(err, docs)
        }
    })
}
module.exports = actions