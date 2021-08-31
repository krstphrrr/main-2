const express = require('express');
const db = require('./config/db')
const routes = require('./routes/routes')

const Op = db.Sequelize.Op;


const app = express();
const PORT = 4000; 

// routes(app)

app.use('/api', routes)


app.listen(PORT, ()=>{
    console.log(`Listening on port:${PORT}`)
})