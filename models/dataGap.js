const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dataGap', {
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
      type: DataTypes.TEXT,
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
    GapMin: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    GapData: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    PerennialsCanopy: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AnnualGrassesCanopy: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AnnualForbsCanopy: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    OtherCanopy: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    NoCanopyGaps: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    NoBasalGaps: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    DateLoadedInDb: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PerennialsBasal: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AnnualGrassesBasal: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AnnualForbsBasal: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    OtherBasal: {
      type: DataTypes.DECIMAL,
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
    SeqNo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RecType: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GapStart: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    GapEnd: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Gap: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ProjectKey: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dataGap',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_gap_pk_seqno_gapstart",
        fields: [
          { name: "PrimaryKey" },
          { name: "SeqNo" },
          { name: "GapStart" },
          { name: "GapEnd" },
        ]
      },
    ]
  });
};
