const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/student'
const app = express()
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open' , () =>{
    console.log("connected")
})


app.use(express.json())

const studentAdressrouter = require('./router/Address')
app.use('/Address', studentAdressrouter)

app.listen(9000, (req, res) =>{
console.log("Listening port no 9000")
})

//app.get('/', (req, res) =>{
  //  res.send('Welcome to REST API Example..')
//})