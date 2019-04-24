const express = require('express')
const ytdl = require('ytdl-core')
const fs = require('fs')
const path = require('path')
const router = express.Router()

// create folder @ working directory
const createMusicFolder = () => {
    fs.stat('./music', (err, stats) => {
        if (err) fs.mkdir('./music', (err) => {if (err) throw err})
        else { console.log(stats) }
    })
}

router.get('/', (req, res, next) => {
    const url = req.query.URL
    createMusicFolder()

    ytdl.getInfo(url, (err, info) => {
        const title = info.title
        const audioFormats = ytdl.filterFormats(info.formats, 'audioonly')
        const filename = title.replace(/\W/g, ' ') + '.mp3'

        for(let value in audioFormats) {
            console.log(audioFormats[value].container)
        }
        console.log(`Formats with only audio: ${audioFormats.length}`)
        ytdl(url, {filter: (format) => format.container === 'm4a'}).pipe(fs.createWriteStream(path.join('./music', filename)))
    })
    res.send(`Converting ${url}!`)
})
module.exports = router