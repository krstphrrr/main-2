const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dataSpeciesInventory', {
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
    SpecRichMethod: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRichMeasure: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRichNbrSubPlots: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich1Container: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich1Shape: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich1Dim1: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich1Dim2: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich1Area: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich2Container: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich2Shape: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich2Dim1: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich2Dim2: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich2Area: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich3Container: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich3Shape: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich3Dim1: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich3Dim2: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich3Area: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich4Container: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich4Shape: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich4Dim1: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich4Dim2: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich4Area: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich5Container: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich5Shape: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich5Dim1: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich5Dim2: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich5Area: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich6Container: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich6Shape: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich6Dim1: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich6Dim2: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SpecRich6Area: {
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
    Species: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ProjectKey: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DENSITY: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dataSpeciesInventory',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_speciesinventory_pk",
        fields: [
          { name: "PrimaryKey" },
          { name: "LineKey" },
          { name: "RecKey" },
          { name: "Species" },
        ]
      },
    ]
  });
};
