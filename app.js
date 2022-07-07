const express = require('express')
const app = express()
const port = 3000

const date = {}
const hash = {}

app.get('/', (req, res) => {    

res.send("El fortin campeon 2022!" + " " + "{{date}}" + " " + "{{gitHash}}")

})

app.listen(port, () => {

console.log(`Example app listening on port ${port}`)

})

module.exports = app
