const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dataLPI', {
    LineKey: {
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
    Direction: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Measure: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    LineLengthAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpacingIntervalAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpacingType: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ShowCheckbox: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    CheckboxLabel: {
      type: DataTypes.TEXT,
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
    PointLoc: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    PointNbr: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ShrubShape: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    layer: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    code: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    chckbox: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ProjectKey: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DateLoadedInDb: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dataLPI',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_lpi_pk",
        fields: [
          { name: "PrimaryKey" },
          { name: "PointLoc" },
          { name: "RecKey" },
          { name: "LineKey" },
        ]
      },
    ]
  });
};
