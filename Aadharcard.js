const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AadharDetails'
const app = express()
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection
con.on('open', () =>{
console.log("DB connected")
})

app.listen(9001,() =>{
    console.log("open port number at 9001")
})

app.use(express.json())
const aadharRoute = require('./router/AadharDetails')
app.use('/AadharDetails', aadharRoute)