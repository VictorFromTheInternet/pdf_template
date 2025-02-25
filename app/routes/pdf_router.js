const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send({"message":"hello world"})
})

router.post('/demo',(req,res)=>{
    
    res.send(req.body)
})

module.exports = router