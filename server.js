const express = require('express')
const router = require('./routes/taskRoutes.js')
const app = express()
const cors = require('cors');
const jwt = require('jsonwebtoken')
const testRouter = require('./routes/test')

require('dotenv').config()

app.use(cors());
app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
app.use('/api', router)
app.use(testRouter)


app.get("/", (req, res) => {
    let sender = { message: "New get Request" }
    res.json(sender);
});

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

app.get('/task', async (req, res) => {
    try {
        res.send('{"name":"Gunther","planet":"Earth","age":54}')
    } catch (e) {
        res.status(500).send()
    }
})

app.post('/login', (req, res) => {
    const username = req.body.username;
    const user = { name: username }
    const assesToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    res.json({ assesToken: assesToken })
})