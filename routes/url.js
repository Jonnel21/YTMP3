const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    //res.send('Data Sent!')
    const value = req.query
    console.log(typeof value)
    res.send(`Converting ${value.URL}!`)
    
})
module.exports = router