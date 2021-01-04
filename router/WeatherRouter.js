const express = require('express')
const weatherRouter = express.Router()
const wdata = require('../modal/WeatherModal')
weatherRouter.get('/', async (req, res) => {
    try {
        console.log("get ()")
        const response = await wdata.find()
        res.send(response)
    } catch (error) {
        console.log(error)
    }
})

weatherRouter.post('/', async (req, res) => {
    try {
        const weaData = wdata({
            day: req.body.day,
            place: req.body.place,
            pin: req.body.pin
        })
        const resp = await weaData.save()
        res.send(resp)
    } catch (error) {
        console.log(error)
    }
})

module.exports = weatherRouter