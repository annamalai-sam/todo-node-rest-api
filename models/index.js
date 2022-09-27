const dbConfig = require('./../config/db.config')
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

sequelize.authenticate().then(() => {
    console.log("connected...")
}).catch((error) => {
    console.error("Error", error);
})

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.sequelize.sync()

db.tasks = require("./task.model.js")(sequelize, Sequelize);

module.exports = db