// const express = require('express')
// // const cors = require('cors')
// const router = require('./routes/taskRoutes.js')
// const app = express()
// require('dotenv').config()
// const cors = require("cors");
// // enabling CORS for all requests
// app.use(cors());

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use('/api', router)
// // Add headers before the routes are defined
// app.use(function (req, res, next) {
//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     // Pass to next layer of middleware
//     next();
// });
// app.get("/", (req, res) => {
//     let sender = { message: "New get Request" }
//     res.json(sender);
// });
// const PORT = process.env.PORT || 8080
// app.listen(PORT, () => {
//     console.log(`server is running on port ${PORT}`)
// })

const express = require('express')
// const cors = require('cors')
const router = require('./routes/taskRoutes.js')
const app = express()
const cors = require('cors');

require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', router)

// enabling CORS for all requests
app.use(cors());

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