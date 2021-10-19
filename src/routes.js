const express = require('express')
const routes = express.Router()

const UserController = require('./Controller/User.Controller')


routes.get('/', (req, res) => {
    console.log(req)
    res.send('done')
})

routes.post('/user/create', UserController.UserCreate)
routes.get('/user/fetch', UserController.UserFetch)
routes.post('/user/update', UserController.UserUpdate)

module.exports = routes