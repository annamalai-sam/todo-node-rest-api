const db = require("../models")
const Task = db.tasks
const User = db.users
const Token = db.token
const jwt = require('jsonwebtoken')
const { where } = require("sequelize")
const bcrypt = require("bcrypt")
// require('dotenv').config({ path: "./../.env" })
// const userController = require("./user.controller")

const loggedUser = async (req, res) => {
    const token = req.headers['authorization']
    const loggedUser = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    // console.log("=================================")
    // console.log(loggedUser.exp)
    // console.log(loggedUser.exp * 1000)
    // console.log(Date.now())
    // console.log(Date.now() >= loggedUser.exp * 1000)
    // console.log("=================================")
    let user = await User.findOne({
        where: { id: loggedUser.user_id },
        include: [{
            model: Task,
            as: 'task'
        }]
    })
    // user["exp"] = loggedUser.exp
    console.log(user)
    // console.log(user.exp)
    res.json(user).status(200)
}

const loginHandler = async (req, res) => {

    const user = await User.findOne({
        where: {
            username: req.body.username,
        }
    })
    if (await bcrypt.compare(req.body.password, user.password)) {
        const payload = {
            username: user.username,
            password: user.password,
            user_id: user.id
        }
        const assesToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2h' })
        const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET)
        const token = {
            refresh_token: refreshToken,
            user_id: user.id
        }
        // console.log("==============================================")
        // console.log(payload)
        // console.log(assesToken)
        // console.log(refreshToken)
        // console.log("==============================================")
        // console.log(token)
        await Token.create(token)
        const tokens = {
            assesToken: assesToken,
            refreshToken: refreshToken
        }
        res.status(200).send(tokens)
    }
    else {
        res.status(200).send({ message: "Password is mismatched" })
    }
}

const reAuthenticateUser = async (req, res) => {
    const reFreshToken = req.headers['authorization']
    console.log(reFreshToken)
    const check = await Token.findOne({ where: { refresh_token: reFreshToken } })
    console.log(check)
    res.json(reFreshToken).status(200)
}

module.exports = {
    loginHandler,
    loggedUser,
    reAuthenticateUser
}
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlZlbmthdCIsInBhc3N3b3JkIjoiSmVydUAyNiIsInVzZXJfaWQiOjEsImlhdCI6MTY2NjY3MTE3Nn0.IGfd5HOSbCsxVVIva_6andevjD - uOx0r_oStsnEJ7yc