let DataTypes = require("sequelize").DataTypes;
let _geoIndicators = require("./geoIndicators");
let _dataHeader = require("./dataHeader")

function initModels(sequelize) {
  let geoIndicators = _geoIndicators(sequelize, DataTypes);
  let dataHeader = _dataHeader(sequelize, DataTypes)

  geoIndicators.belongsTo(dataHeader, { foreignKey: "PrimaryKey"});
  dataHeader.hasMany(geoIndicators, {foreignKey: "PrimaryKey"});

  return {
    geoIndicators, dataHeader
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
