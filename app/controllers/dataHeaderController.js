const initModels = require('../models/init-models')
const db = require('../config/db')
const whereConstruct = require('../config/util')
const models = initModels(db.sequelize)
const { Op } = require("sequelize");
const DataHeader = models.dataHeader



exports.getHeader = (request, response, next) => {

  console.log(whereConstruct(request.query))
  try {
    DataHeader.findAll({
      limit:1,
      where: whereConstruct(request.query)
    })
    .then(e =>{
      response.status(200).send(e)
    })
  } catch (err){
    console.error(err)
  }
}
exports.getHeaderState = (request, response, next) => {
  try {
    DataHeader.findAll({
      limit:5,
      where: {
        SpeciesState: request.params.state
      }
    })
    .then(e =>{
      response.status(200).send(e)
    })
    .catch(err=>{
      console.log(err)
      response.status(404).send("not found")
    })
  } catch(err){
    console.error(err)
  }
  
}