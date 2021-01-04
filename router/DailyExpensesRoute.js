const express = require('express');
const expRoute = express.Router()
const app = express()

expRoute.get('/', async (req, res) => {
    console.log("get req..")
res.send('GET REQUEST....')
    try {

    } catch (error) {

    }
})

module.exports = expRoute