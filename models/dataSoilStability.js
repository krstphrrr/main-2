const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dataSoilStability', {
    PlotKey: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RecKey: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DateModified: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    FormType: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FormDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    LineKey: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SoilStabSubSurface: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DateLoadedInDb: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PrimaryKey: {
      type: DataTypes.STRING(100),
      allowNull: true,
      references: {
        model: 'dataHeader',
        key: 'PrimaryKey'
      }
    },
    DBKey: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Position: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Line: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Pos: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Veg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Rating: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Hydro: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ProjectKey: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dataSoilStability',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_soilstability_pk",
        fields: [
          { name: "PrimaryKey" },
          { name: "PlotKey" },
          { name: "Position" },
          { name: "Pos" },
        ]
      },
    ]
  });
};
