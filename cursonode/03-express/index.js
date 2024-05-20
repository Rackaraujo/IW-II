const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send('Seja Bem-Vindo(a)')
})

app.get('/blog',function(req,res){
    res.send('Essa é a página do blog')
})

app.get('/sobre',function(req,res){
    res.send('Essa é a página sobre')
})

app.get('/cadastro/:nome/:idade',function(req,res){
    res.send('Seu nome é:' + req.params.nome + '\nSua idade é:' + req.params.idade)
})

app.listen(8081,function(){
    console.log('Servidor rodando em http://localhost:8081')
})