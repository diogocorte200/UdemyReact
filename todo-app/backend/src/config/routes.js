const express = require('express')

module.exports = function(server){
    //api routes

    const router = express.Router()
    server.use('/api', router)


    //todo routes
    const todoServices = require('../api/todo/todoServices')
   todoServices.register(router, '/todos')
}