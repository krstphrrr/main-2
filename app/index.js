const express = require('express');
const routes = require('./routes/routes.js')

const app = express();
const PORT = 4000; 

routes(app)

app.get('/', (request,response)=>{
  response.send("hey ")
})

app.listen(PORT, ()=>{
  console.log(`Listening on port:${PORT}`)
})
