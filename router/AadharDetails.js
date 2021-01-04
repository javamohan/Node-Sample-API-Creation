const express = require('express')
const aadharroute = express.Router()
const aadmodal= require('../modal/AadharData')
aadharroute.get('/', async (req, res) =>{
    try{
        const outcome = await aadmodal.find()
        res.json(outcome)
    }catch(err){
        console.log(err)
    }

    console.log("get request.....")
   // res.send('Get Request....')

})

aadharroute.post('/',  async(req, res) =>{

const adcard = new aadmodal({
    name : req.body.name,
    gender: req.body.gender,
    uuid : req.body.uuid
})
try{
const resback = await adcard.save()
res.json(resback)
} catch(err){
    console.log(err)
}
})

module.exports = aadharroute