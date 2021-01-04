const mongoose = require('mongoose')

const expmodal = mongoose.Schema({

    name:{
        type:String,
        required:true,
        date: Date.now
    }
})