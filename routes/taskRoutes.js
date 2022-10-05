const express = require('express')
const taskController = require('../controllers/task.controller.js')

const router = express.Router()


router.get('/tasks', taskController.getAllTask)
router.post('/tasks', taskController.addTask)
router.get('/tasks/:id', taskController.getOneTask)
router.put('/tasks/:id', taskController.updateTask)
router.get('/status/:id', taskController.updateStatus)
router.delete('/tasks/:id', taskController.deleteTask)

module.exports = router

// http://localhost:8080/api