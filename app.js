const express = require('express')
const dotenv = require('dotenv').config()


const app = express()
const port = process.env.PORT || 3000

console.log(port)

app.get('/', (req,res)=>{

    res.send({"message":"Hello World"})
})

app.listen(port, ()=>{
    console.log(`Server Started`)
    console.log(`Listening on : http://localhost:${port}`)
})