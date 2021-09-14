var DataTypes = require("sequelize").DataTypes;
var _geoSpecies = require("./geoSpecies");

function initModels(sequelize) {
  var geoSpecies = _geoSpecies(sequelize, DataTypes);

  geoSpecies.belongsTo(dataHeader, { as: "PrimaryKey_dataHeader", foreignKey: "PrimaryKey"});
  dataHeader.hasMany(geoSpecies, { as: "geoSpecies", foreignKey: "PrimaryKey"});

  return {
    geoSpecies,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
