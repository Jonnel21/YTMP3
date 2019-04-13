// import libraries
const fs = require('fs');
const ytdl = require('ytdl-core');

const videoURL = "https://www.youtube.com/watch?v=198gzllaumo"

function startConvert(videoURL) {
    alert(`Converting url ${videoURL}`)
    console.log(`Converting: ${videoURL}`)

    ytdl(videoURL).pipe(fs.createWriteStream('video.flv'))
}


