const express = require('express')
const app = express()
const port = 5432

const bodyparser = require('body-parser')
const form_req = require('express-form-data')

const mongoose = require('mongoose')



require('dotenv').config()

const conf = require('./config')

app.use(form_req.parse())

app.use(bodyparser.json())

const routes = require('./routes')
app.use('/', routes)


// console.log("ffds")

mongoose.connect(conf.MONGO_DB, () => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
})


