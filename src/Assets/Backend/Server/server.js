require('dotenv').config();
const PORT = process.env.PORT || 5000;

const express = require('express');
const mongoCon = require('../Database/Config')

const app = express()
const router = require("./router/gpt-router")

app.use(express.json())

app.use('/api/gpt', router);
// console.log(process.env.PORT)

mongoCon().then(() => {

    app.listen(PORT)
    console.log(` Server is runnin at: http://localhost:${PORT}/api/gpt`)
    }
)