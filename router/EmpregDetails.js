const express = require('express')
const empRoute = express.Router()
const empRegModal = require('../modal/EmpRegModal')
empRoute.get('/', async (req, res) =>{
try{
const empRes =await empRegModal.find()
res.json(empRes)
}catch(err){
    console.log(err)
}
})

empRoute.post('/',  async (req, res)=>{
    try{
        const ersave = new empRegModal({
         name:req.body.name,
         lastname:req.body.lastname,
         country:req.body.country,
         passport:req.body.passport
    })
        const empSave = await ersave.save()
        res.json(ersave)
    }catch(err){
        console.log(err)
    }

})

module.exports = empRoute