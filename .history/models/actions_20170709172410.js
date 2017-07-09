const neDB = require("nedb")
const DB = new neDB({filename:'../db/db.json'})
let actions = {}
module exports = actions