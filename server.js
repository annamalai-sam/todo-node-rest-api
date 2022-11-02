const express = require('express')
const taskRouter = require('./routes/taskRoutes.js')
const userRouter = require('./routes/userRoutes')
const app = express()
const cors = require('cors');
const jwt = require('jsonwebtoken')
const applicationRouter = require('./routes/applicationRoutes');
const { use } = require('./routes/userRoutes');
const db = require("./models");
const { where } = require('sequelize');
const User = db.users

require('dotenv').config({ path: "./.env" })

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', taskRouter)
app.use('/api', userRouter)
app.use(applicationRouter)

// app.use(cors());

app.get("/", (req, res) => {
    let sender = { message: "New get Request" }
    res.json(sender);
});

const PORT = process.env.PORT || 4200
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

// app.post('/login', (req, res) => {
//     const user = {
//         username: req.body.username,
//         password: req.body.password,
//         user_id: req.body.id
//     }
//     // console.log(user)
//     // console.log("==============================================")
//     // console.log(process.env.ACCESS_TOKEN_SECRET)
//     // console.log("==============================================")
//     const assesToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
//     res.json({ assesToken: assesToken })
//     // res.send(assesToken)
// })

app.post('/log', (req, res) => {
    const token = req.headers['authorization']
    // const token = authHeader && authHeader.split(' ')[1]
    // console.log("==============================================")
    // console.log(token)
    // console.log("==============================================")
    const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    // console.log(user.name)
    // console.log("==============================================")
    res.send(user).status(200)
})

// app.get('/locset', (req, res) => {
        // localStorage.setItem('bgcolor', 'red');
// })

// app.get('/locget', (req, res) => {
     // const currentColor = localStorage.getItem('bgcolor')
     // console.log(currentColor)
// })
