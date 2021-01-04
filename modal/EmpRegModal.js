const mongoose = require('mongoose')
const empRegmodal = new mongoose.Schema({
    passport:{
        type: String,
        required: true
    },
 country:{
        type: String,
        required: true
    }


})

module.exports = mongoose.model('empRegModal', empRegmodal )