const express = require('express')
const puppeteer = require('puppeteer')
const fs = require('fs-extra')

const router = express.Router()

router.get('/',(req,res)=>{
    res.send({"message":"hello world"})
})

router.post('/demo', async (req,res)=>{
    try{
        const browser = await puppeteer.launch()     
        const page = await browser.newPage()
        
        await page.setContent('<h1> Hello World </h1>')
        await page.emulateMediaType('screen')
        await page.pdf({
            path: 'test.pdf',
            format: 'A4',
            printBackground: true
        })

        console.log('Generated PDF ')
        await browser.close()

        res.send({"message":"Generated PDF"})



    }catch(err){
        console.log(err)
    }
    
})

module.exports = router