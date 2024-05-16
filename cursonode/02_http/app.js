//SELECIONAR O MODULO http DO NODE
var http = require('http')

//ABRIR UM SERVIDOR HTTP
http.createServer(function(req,res){
    res.end('All of my hate cannot be found hate cannot be found I will not be drowned I will not be drowned By your thoughtless scheming')
}).listen(8081)

console.log('Servidor rodando...')