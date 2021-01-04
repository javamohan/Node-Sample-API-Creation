const express = require('express')
const router = express.Router()
const StudentAddress = require('../modal/StudentAddress')
router.get('/', async(req, res)=>{
    try{
    const response = await StudentAddress.find()
    res.json(response)
    }
    catch(err){
        console.log(err)
    }
})

router.post('/', async(req, res) =>{
const sAdd = new StudentAddress({
    name : req.body.name,
    country:req.body.country
})

try{
  const resp =  await sAdd.save()
  res.json(resp)
}catch(err){
    console.log(err)
}

})

module.exports = router
