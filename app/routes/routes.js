const db = require('../config/db.js')

module.exports = routes = (app) => {
  app.route('/route/:id')
  .get((request,response, next)=>{
    console.log(`request from: ${request.originalUrl}`)
    console.log( `request type: ${request.method}`)
    next();
  }, (request,response, next) => {
    // console.log(request)
    db.query('select * from "dataHeader" limit 5;')
    .then(res =>{ console.log(res)})
    // response.send(`route s`)
  }
  )
}

