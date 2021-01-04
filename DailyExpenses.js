const express = require('express');
const mongoose = require('mongoose')
const url ='mongodb://localhost/expenses'
const app = express()
 mongoose.connect(url, {useNewUrlParser:true})
 const con = mongoose.connection

con.on('open', ()=>{
console.log('connection open')
})

app.use(express.json())
const expenseRoute = require('./router/DailyExpensesRoute')
app.use('/api/expenses', expenseRoute)

app.listen(9000, ()=>{
console.log("Application started on port 9000")
})