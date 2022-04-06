const express = require('express')
const server = express()
const PORT = process.env.PORT || 3008
const router = require('./routes/router')

server.set('view engine', 'ejs')

server.use('/', router)


server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})