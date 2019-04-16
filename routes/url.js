const express = require('express')
const ytdl = require('ytdl-core')
const fs = require('fs')
const router = express.Router()

router.get('/', (req, res, next) => {
    //res.send('Data Sent!')
    const value = req.query
    console.log(typeof value)
    res.send(`Converting ${value.URL}!`)
    ytdl(value.URL).pipe(fs.createWriteStream('video.flv'))
})
module.exports = router