const db = require("./models")
const Task = db.tasks
const User = db.users
const Token = db.token
const jwt = require('jsonwebtoken')
const { where } = require("sequelize")
require('dotenv').config({ path: "./.env" })

async function test(reFreshToken) {
    // console.log(reFreshToken)
    // console.log(process.env.REFRESH_TOKEN_SECRET)
    const check = await Token.findOne({ where: { refresh_token: reFreshToken } })
    const loggedUserToken = jwt.verify(reFreshToken, process.env.REFRESH_TOKEN_SECRET)
    const loggedUserDetails = await User.findOne()
    console.log(loggedUserDetails)
    // console.log(loggedUserToken)
}

// test("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ6IlZlbmthdCIsInBhc3N3b3JkIjoiSmVydUAyNiIsInVzZXJfaWQiOjEsImlhdCI6MTY2NjY3MTE3Nn0.IGfd5HOSbCsxVVIva_6andevjD-uOx0r_oStsnEJ7yc");
test("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlZlbmthdCIsInBhc3N3b3JkIjoiSmVydUAyNiIsInVzZXJfaWQiOjEsImlhdCI6MTY2NjY3MTE3Nn0.IGfd5HOSbCsxVVIva_6andevjD-uOx0r_oStsnEJ7yc");
