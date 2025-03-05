const express = require('express')
const dotenv = require('dotenv').config()
const pdf_router = require('./app/routes/pdf_router')
const logger = require('./app/middleware/logging')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Middleware
// app.use('/', logger)

// routes
app.use('/', pdf_router)




app.listen(port, ()=>{
    console.log(`Server Started`)
    console.log(`Listening on : http://localhost:${port}`)
})