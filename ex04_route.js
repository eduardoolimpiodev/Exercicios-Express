// Cadeia de responsabilidades, cadeias de Middleware
// use ou get ?
// com o use o início da url fica com um pré-fixo: http://www.site.com/api
// é bastante usado o use, como por exemplo com o bodyParse

const express = require('express')
const server = express()

server.route('/clientes')
    .get((req, res) => res.send('Lista de Clientes'))   // Receber a lista de clientes
    .post((req, res) => res.send('Novo Cliente'))       // Criando novo cliente
    .put((req, res) => res.send('Alterar Cliente'))     // Alterando Cliente
    .delete((req, res) => res.send('Deletar Cliente'))  // Excluir cliente

server.listen(3000, () => console.log('Executando...'))