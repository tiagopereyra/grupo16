const express = require('express')
const app = express()
const port = 3000

const date = process.env.DATE
const hash = process.env.GITCOMMIT

app.get('/', (req, res) => {    

res.send("El fortin campeon 2022!" + hash)

})

app.listen(port, () => {

console.log(`Example app listening on port ${port}`)

})

module.exports = app
