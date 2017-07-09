const neDB = require("nedb")
const DB = new neDB({filename:'../db/db.json'})
module.exports = actions