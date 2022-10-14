const db = require("../models")
const Task = db.tasks
const User = db.users
const Token = db.token
const jwt = require('jsonwebtoken')
const { where } = require("sequelize")
// const userController = require("./user.controller")


const loggedUser = async (req, res) => {
    const token = req.headers['authorization']
    const loggedUser = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    console.log("=================================")
    console.log(loggedUser.exp)
    console.log(loggedUser.exp * 1000)
    console.log(Date.now())
    console.log(Date.now() >= loggedUser.exp * 1000)
    console.log("=================================")

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
            password: req.body.password
        }
    })
    const payload = {
        username: user.username,
        password: user.password,
        user_id: user.id
    }
    const assesToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2h' })
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET)
    const token = {
        refresh_token: refreshToken
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