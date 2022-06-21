// Cadeia de responsabilidades, cadeias de Middleware
// use ou get ?
// com o use o início da url fica com um pré-fixo: http://www.site.com/api
// é bastante usado o use, como por exemplo com o bodyParse

const express = require('express')
const server = express()

server.use('/api', function(req, res, next) {
    console.log('Inicio...')
    next()
    console.log('Fim...')
})

server.use('/api', function(req, res) {
    console.log('Resposta...')
    res.send('<h1>API!</h1>')
})

server.listen(3000, () => console.log('Executando...'))