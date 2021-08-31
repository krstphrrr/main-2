const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('geoIndicators', {
    AH_AnnGrassCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_ForbCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_GrassCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_NonNoxAnnForbCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_NonNoxAnnForbGrassCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_NonNoxAnnGrassCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_NonNoxCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_NonNoxPerenForbCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_NonNoxPerenForbGrassCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_NonNoxPerenGrassCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_NonNoxShrubCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_NonNoxSubShrubCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_NonNoxSucculentCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_NonNoxTreeCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_NonSagebrushShrubCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_NoxAnnForbCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_NoxAnnForbGrassCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_NoxAnnGrassCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_NoxCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_NoxPerenForbCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_NoxPerenForbGrassCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_NoxPerenGrassCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_NoxShrubCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_NoxSubShrubCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_NoxSucculentCover: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AH_NoxTreeCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_PerenForbCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_PerenGrassCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_PerenGrassForbCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_PreferredForbCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_SagebrushCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_SagebrushCover_Live: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_ShortPerenGrassCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_ShrubCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AH_TallPerenGrassCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    BareSoilCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    County: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DBKey: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DateEstablished: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DateLoadedInDb: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DateVisited: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    EcologicalSiteId: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FH_CyanobacteriaCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    FH_DepSoilCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    FH_DuffCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    FH_EmbLitterCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    FH_HerbLitterCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    FH_LichenCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    FH_MossCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    FH_NonNoxAnnForbCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    FH_NonNoxAnnGrassCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    FH_NonNoxPerenForbCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    FH_NonNoxPerenGrassCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    FH_NonNoxShrubCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    FH_NonNoxSubShrubCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    FH_NonNoxSucculentCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    FH_NonNoxTreeCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    FH_NoxAnnForbCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    FH_NoxAnnGrassCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    FH_NoxPerenForbCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    FH_NoxPerenGrassCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    FH_NoxShrubCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    FH_NoxSubShrubCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    FH_NoxSucculentCover: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FH_NoxTreeCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    FH_RockCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    FH_SagebrushCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    FH_TotalLitterCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    FH_VagrLichenCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    FH_WaterCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    FH_WoodyLitterCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    GapCover_101_200: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    GapCover_200_plus: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    GapCover_25_50: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    GapCover_25_plus: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    GapCover_51_100: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Hgt_Forb_Avg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Hgt_Grass_Avg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Hgt_Herbaceous_Avg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Hgt_NonNoxPerenGrass_Avg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Hgt_NonSagebrushShrub_Avg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Hgt_NoxPerenGrass_Avg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Hgt_PerenForbGrass_Avg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Hgt_PerenForb_Avg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Hgt_PerenGrass_Avg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Hgt_Sagebrush_Avg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Hgt_Sagebrush_Live_Avg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Hgt_ShortPerenGrass_Avg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Hgt_TallPerenGrass_Avg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Hgt_Woody_Avg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Latitude_NAD83: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    LocationType: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Longitude_NAD83: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    NumSpp_NonNoxPlant: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    NumSpp_NoxPlant: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    NumSpp_PreferredForb: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    PercentCoveredByEcoSite: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    PlotID: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PlotKey: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PrimaryKey: {
      type: DataTypes.STRING(100),
      // allowNull: false,
      primaryKey: true,
      references: {
        model: 'dataHeader',
        key: 'PrimaryKey'
      }
    },
    ProjectName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RH_AnnualProd: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RH_BareGround: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RH_BioticIntegrity: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RH_CommentsBI: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RH_CommentsHF: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RH_CommentsSS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RH_Compaction: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RH_DeadDyingPlantParts: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RH_FuncSructGroup: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RH_Gullies: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RH_HydrologicFunction: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RH_InvasivePlants: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RH_LitterAmount: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RH_LitterMovement: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RH_PedestalsTerracettes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RH_PlantCommunityComp: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RH_ReprodCapabilityPeren: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RH_Rills: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RH_SoilSiteStability: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RH_SoilSurfLossDeg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RH_SoilSurfResisErosion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RH_WaterFlowPatterns: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RH_WindScouredAreas: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SagebrushShape_All_ColumnCount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SagebrushShape_All_Predominant: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SagebrushShape_All_SpreadCount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SagebrushShape_Live_ColumnCount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SagebrushShape_Live_Predominant: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SagebrushShape_Live_SpreadCount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SoilStability_All: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SoilStability_Protected: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    SoilStability_Unprotected: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Spp_Nox: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Spp_PreferredForb: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Spp_Sagebrush: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Spp_ShortPerenGrass: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Spp_TallPerenGrass: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    State: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TotalFoliarCover: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'geoIndicators',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_geoindicators_pk",
        fields: [
          { name: "PrimaryKey" },
        ]
      },
    ]
  });
};
