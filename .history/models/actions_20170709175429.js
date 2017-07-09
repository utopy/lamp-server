const Datastore = require("nedb")
const id = require('shortid')
const DB = new Datastore({filename:'../db/db', autoload: true})
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
    body.uid = id.generate()
    if(!body.created){body.created = Date.now()}
    if(!body.priority){body.priority = 1}
    if(!body.expiration_date){body.expiration_date = 0}
    body.complete = false;
    DB.insert(body, (err, docs)=>{
        if(err){
            callback(err)
        } else {
            callback(err, docs)
        }
    })
}
module.exports = actions