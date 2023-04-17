const express = require('express')
const bodyParser = require('body-parser')
const calculator = express()
const port = 3000
calculator.use(bodyParser.urlencoded({extended: true}))

calculator.listen(port)

calculator.get("/", function (req, res) {
    res.sendFile(`${__dirname}/index.html`)
})

calculator.post("/", function (req, res) {
    let result = Number(req.body.num1) + Number(req.body.num2)
    res.send(`The result is ${result}`)
})