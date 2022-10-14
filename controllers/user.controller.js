const db = require("../models")
const Task = db.tasks
const User = db.users

const addUser = async (req, res) => {
    // console.log("======================================================")
    // console.log(req.body.username)
    // console.log(req.body.password)
    let userDetails = {
        username: req.body.username,
        password: req.body.password
    }
    const user = await User.create(userDetails)
    res.status(200).send(user)
}

const getAllUser = async (req, res) => {
    let users = await User.findAll({
        // include: [{
        //     model: Task,
        //     as: 'task'
        // }]
    })
    res.status(200).send(users)
}

const getOneUser = async (req, res) => {
    let id = req.params.id
    let user = await User.findOne({ where: { id: id } })
    res.status(200).send(user)
    // console.log(user)
}
// getOneUser();
module.exports = {
    addUser,
    getAllUser,
    getOneUser
}