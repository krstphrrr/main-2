const initModels = require('../models/init-models')
const db = require('../config/db')
const models = initModels(db.sequelize)
const whereConstruct = require('../config/util')
const GeoIndicators = models.geoIndicators
const DataHeader = models.dataHeader

exports.getGeoIndicators = (request, response, next) => {
  try{
    GeoIndicators.findAll({
      limit:5,
      where: whereConstruct(request.query, GeoIndicators.rawAttributes),
      include: [{
        model:DataHeader,
        required:true,
        attributes:[],
        where: whereConstruct(request.query, DataHeader.rawAttributes)
      }],
    })
    .then(e =>{
      response.status(200).send(e)
    })
  } catch(err){
    console.error(err)
  }
  
}