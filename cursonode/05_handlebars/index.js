const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

//Config
    //Template Engine
    app.engine('handlebars', handlebars.engine({defaultlayout:'main'}))
    app.set('view engine','handlebars')

    //Comando de banco de dados 
    const sequelize = new Sequelize('test', 'root', '', {
        host:'localhost',
        dialect:'mysql'
    })

//Rotas
app.get('/cadastro', function(req,res){
    res.render('formulario')
})

app.post('/add', function(req, res){
    res.send('Formulário Recebido')
})

app.listen(8081,function(){
    console.log('Servidor rodando em http://localhost:8081')
})
