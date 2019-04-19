const express = require('express')
const ytdl = require('ytdl-core')
const fs = require('fs')
const router = express.Router()

router.get('/', (req, res, next) => {
    const url = req.query.URL
    res.send(`Converting ${url}!`)

    ytdl.getInfo(url, (err, info) => {
        const title = info.title
        ytdl(url).pipe(fs.createWriteStream(title.replace(/\W/g, ' ') + '.mp4'))
    })
})
module.exports = router