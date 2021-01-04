
const mongoose = require('mongoose')
const weatherData = mongoose.Schema({

    day:{
        type: String,
        required: true
    },
    place:{
        type: String,
        required: true
    },
    pin:{
        type:String,
        required:true
    }
    
})

module.exports = mongoose.model('weatherData', weatherData)