const mongoose = require('mongoose')

const aadharSchema = new mongoose.Schema({

name:{
type : String,
required : true
},

gender:{
    type : String,
    required: true

},

uuid:{
type: String,
required:true
}
})

module.exports = mongoose.model('AadharData', aadharSchema)