
const express = require('express')
const HeaderController = require('../controllers/dataHeaderController')
const GeoIndicatorsController = require('../controllers/geoIndicatorsController')

const router = express.Router()

router.get('/dataheader', HeaderController.getHeader)
router.get('/dataheader/:state', HeaderController.getHeaderState)
router.get('/geoindicators', GeoIndicatorsController.getGeoIndicators)


module.exports = router

