const taskController = require('../controllers/task.controller.js')

const router = require('express').Router()

router.post('/newTask', taskController.addTask)
router.get('/getAllTask', taskController.getAllTask)
router.get('/:id', taskController.getOneTask)
router.put('/:id', taskController.updateTask)
router.get('/status/:id', taskController.updateStatus)
router.delete('/:id', taskController.deleteTask)

module.exports = router

// http://localhost:8080/api/tasks