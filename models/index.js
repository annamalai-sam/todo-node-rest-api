const dbConfig = require('./../config/db.config')
const { Sequelize, DataTypes } = require("sequelize");
// const useBcrypt = require("sequelize-bcrypt");

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

// console.log(dbConfig.DB)
// console.log(dbConfig.USER)
// console.log(dbConfig.PASSWORD)
// console.log(dbConfig.HOST)

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
db.users = require("./user.model.js")(sequelize, Sequelize);
db.token = require("./userRefreshToken.model")(sequelize, Sequelize);

db.users.hasMany(db.tasks, {
    foreignKey: 'user_id',
    as: 'task'
})

db.tasks.belongsTo(db.users, {
    foreignKey: 'user_id',
    as: 'user'
})

db.users.hasOne(db.token, {
    foreignKey: 'user_id',
    as: 'user'
})

db.token.belongsTo(db.users, {
    foreignKey: 'user_id',
    as: 'user'
})

module.exports = db