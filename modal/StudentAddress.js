const mongoose = require('mongoose')

const studetailsSchema = new mongoose.Schema({

name:{
    type : String,
    required:true
},

country:{
    type: String,
    required : true

},

})

module.exports = mongoose.model('StudentAddress',studetailsSchema )