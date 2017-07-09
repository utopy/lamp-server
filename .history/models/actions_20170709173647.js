const neDB = require("nedb")
const id = require('shortid')


const DB = new neDB({filename:'../db/db', autoload: true})
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

actions.createTodo = (data, callback)=>{
    console.log(data)
}
module.exports = actions