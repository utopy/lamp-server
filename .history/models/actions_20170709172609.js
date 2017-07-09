const neDB = require("nedb")
const DB = new neDB({filename:'../db/db.json'})
let actions = {}
actions.getTodos(){
    console.log(DB)
}
module.exports = actions