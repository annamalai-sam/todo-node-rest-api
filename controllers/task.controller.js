const db = require("../models")

const Task = db.tasks

const addTask = async (req, res) => {
    let taskDetails = {
        title: req.body.title,
        due_date: req.body.due_date
    }
    const task = await Task.create(taskDetails)
    res.status(200).send(task)
}

const getAllTask = async (req, res) => {
    let task = await Task.findAll({})
    res.status(200).send(task)
}

const getOneTask = async (req, res) => {
    let id = req.params.id
    let task = await Task.findOne({ where: { id: id } })
    res.status(200).send(task)
}

const updateTask = async (req, res) => {
    let id = req.params.id
    let update = { title: req.body.title }
    const task = await Task.update(update, { where: { id: id } })
    res.status(200).send(task)
}

const updateStatus = async (req, res) => {
    let id = req.params.id
    let update = { finished: true }
    const task = await Task.update(update, { where: { id: id } })
    res.status(200).send(task)
}

const deleteTask = async (req, res) => {
    let id = req.params.id
    await Task.destroy({ where: { id: id } })
    res.status(200).send('Product is deleted !')
}

module.exports = {
    addTask,
    getAllTask,
    getOneTask,
    updateTask,
    updateStatus,
    deleteTask
}