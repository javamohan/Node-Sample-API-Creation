const express = require('express');
const mongoose = require('mongoose')
const app = express()
const url = 'mongodb://localhost/Temparature'
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection
const PORT = process.env.PORT || 9000
con.on('open', () =>{
    console.log("DB Connected..")
})

app.use(express.json())
const rout = require('./router/WeatherRouter')
app.use('/Weather', rout)

app.listen(PORT, () =>{
    console.log(`Weather API - Application listining on port  : ${PORT}`)
})