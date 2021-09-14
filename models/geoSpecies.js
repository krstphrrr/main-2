const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('geoSpecies', {
    AH_SpeciesCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_SpeciesCover_n: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DBKey: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Duration: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GrowthHabit: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GrowthHabitSub: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Hgt_Species_Avg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Hgt_Species_Avg_n: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Noxious: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PlotID: {
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
    SG_Group: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Species: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DateLoadedInDb: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    SpeciesKey: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Public: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'geoSpecies',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_geospecies_pk",
        fields: [
          { name: "PrimaryKey" },
        ]
      },
    ]
  });
};
