var DataTypes = require("sequelize").DataTypes;
var _geoIndicators = require("./geoIndicators");

function initModels(sequelize) {
  var geoIndicators = _geoIndicators(sequelize, DataTypes);

  geoIndicators.belongsTo(dataHeader, { as: "PrimaryKey_dataHeader", foreignKey: "PrimaryKey"});
  dataHeader.hasMany(geoIndicators, { as: "geoIndicators", foreignKey: "PrimaryKey"});

  return {
    geoIndicators,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
