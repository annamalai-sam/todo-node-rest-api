const express = require('express')

const router = express.Router()
router.get('/tasks1', async (req, res) => {
    try {
        res.send('{"name":"Gunther","planet":"Earth","age":54}')
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router