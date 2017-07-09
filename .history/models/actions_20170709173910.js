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
    let body = data;
    data.uid = id.generate()
    console.log(body)
    if(!data.created){data.created = Date.now()}
    if(!data.priority){data.priority = 1}
}
module.exports = actions