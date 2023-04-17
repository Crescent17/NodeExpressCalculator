const express = require('express')
const calculator = express()
const port = 3000

calculator.listen(port)

calculator.get("/", function (req, res) {
    res.sendFile(`${__dirname}/index.html`)
})