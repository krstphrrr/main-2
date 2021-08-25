const dbConfig = require('./config')

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  dbConfig.database.dbname, 
  dbConfig.database.user, 
  dbConfig.database.password, {
  host: dbConfig.database.host,
  dialect: dbConfig.database.dialect,
  // operatorsAliases: false,

  pool: {
    max: dbConfig.database.pool.max,
    min: dbConfig.database.pool.min,
    acquire: dbConfig.database.pool.acquire,
    idle: dbConfig.database.pool.idle
  }
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.dataHeader = require('./dataHeader')(sequelize,Sequelize)

module.exports = db