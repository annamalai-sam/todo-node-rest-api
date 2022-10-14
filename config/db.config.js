require('dotenv').config()

// console.log("====================================")
// console.log(process.env.DB_HOST)
// console.log(process.env.DB_USER_NAME)
// console.log(process.env.DB_PASSWORD)
// console.log("====================================")

module.exports = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER_NAME,
    PASSWORD: process.env.DB_PASSWORD,
    DB: "api_todo",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
