const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dataHeight', {
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
    RecKey: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Height: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Species: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Chkbox: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GrowthHabit_measured: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LineKey: {
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
      type: DataTypes.STRING(100),
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
    HeightOption: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    HeightUOM: {
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
    ProjectKey: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DateLoadedInDb: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dataHeight',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_height_pk",
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
