const express = require('express')
const app = express()
const port = 5432

const bodyparser = require('body-parser')
const form_req = require('express-form-data')

require('dotenv').config()

app.use(form_req.parse())

app.use(bodyparser.json())

const routes = require('./routes')
app.use('/', routes)


// console.log("ffds")

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})