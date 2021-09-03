const express = require('express');
const db = require('./config/db')
const routes = require('./routes/routes')
const pino = require('pino-http')()


const app = express();
const PORT = 4000; 
app.use(pino)
app.use('/api', routes)


app.listen(PORT, ()=>{
    console.log(`Listening on port:${PORT}`)
})