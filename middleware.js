// O papel do middleware é fazer algum tipo de processamento
// e no final ou ele chama o método next ou você chama resp.send('..Resposta para o Browser')


let mid1 = function( req, resp, next) {
    //faz algo...
    next() // ou resp.send('...')
}
server.use(mid1)
// o server aponta para uma instância do express.

server.use('/api', mid1)