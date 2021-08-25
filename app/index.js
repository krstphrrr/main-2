const express = require('express');
const routes = require('./routes/routes.js')
const db = require('./config/db')

const app = express();
const PORT = 4000; 

routes(app)

app.get('/', (request,response)=>{
  response.send("hey ")
})

db.sequelize
  .sync({logging:console.log})
  .catch(err=>{
    console.log(err)
  })
  .then(result=>{
    app.listen(PORT, ()=>{
      console.log(`Listening on port:${PORT}`)
    })
  })

