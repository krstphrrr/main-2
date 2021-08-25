const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dataHeader', {
    PrimaryKey: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    SpeciesState: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PlotID: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PlotKey: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DBKey: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EcologicalSiteId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Latitude_NAD83: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Longitude_NAD83: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    State: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    County: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DateEstablished: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DateLoadedInDb: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ProjectName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ProjectKey: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LocationType: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DateVisited: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PercentCoveredByEcoSite: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    wkb_geometry: {
      type: DataTypes.GEOMETRY('POINT', 4326),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dataHeader',
    schema: 'public',
    timestamps: false
  });
};
