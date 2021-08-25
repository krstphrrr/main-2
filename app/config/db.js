const {Pool} = require('pg')
const config = require('./config')

const db = new Pool({ 
  user:config.database.user,
  password: config.database.password,
  host: config.database.host,
  port: config.database.port,
  database: config.database.dbname
})
db.on('connect', ()=>{
  console.log('connected')
})

module.exports = db