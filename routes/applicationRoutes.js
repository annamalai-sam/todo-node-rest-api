const express = require('express')
const applicationController = require('../controllers/application.controller')

const router = express.Router()

router.post('/login', applicationController.loginHandler)
router.get('/user', applicationController.loggedUser)
router.get('/authenticate', applicationController.reAuthenticateUser)
module.exports = router