const express = require('express')
const mongoose = require('mongoose')
const app = express()
const url = 'mongodb://localhost/Emp_Reg'
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () =>{
    console.log("DB connected")
})

app.use(express.json())
const eregRouter = require('./router/EmpregDetails')
app.use('/empReg' , eregRouter)

app.listen(9000, ()=>{
    console.log("Application started on port 9000")
})