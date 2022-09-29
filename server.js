const express = require('express')
const cors = require('cors')
const router = require('./routes/taskRoutes.js')
const app = express()
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', router)
app.get("/", (req, res) => {
    let sender = { message: "New get Request" }
    res.json(sender);
});
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})