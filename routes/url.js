const express = require('express')
const ytdl = require('ytdl-core')
const fs = require('fs')
const router = express.Router()

router.get('/', (req, res, next) => {
    const url = req.query.URL

    res.send(`Converting ${url}!`)
    ytdl(url).pipe(fs.createWriteStream('video.flv'))
})
module.exports = router