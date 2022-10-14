const express = require('express')
const userController = require("./../controllers/user.controller")

const router = express.Router()

router.post('/user', userController.addUser)
router.get('/user/:id', userController.getOneUser)
router.get('/user', userController.getAllUser)

module.exports = router

// http://localhost:8080/api