const initModels = require('../models/init-models')
const db = require('../config/db')
const models = initModels(db.sequelize)
const whereConstruct = require('../config/util')
const GeoIndicators = models.geoIndicators
const DataHeader = models.dataHeader

exports.getGeoIndicators = (request, response, next) => {
  // add per-table field handlers here
  
  try{
    GeoIndicators.findAll({
      limit:2,
      where: whereConstruct(request.query),
      
      include: [{
        model:DataHeader,
        required:true
      }],

    })
    .then(e =>{
      response.status(200).send(e)
    })
  } catch(err){
    console.error(err)
  }
  
}