function iniciar(){
    var nome = prompt('Qual é o seu nome? ')
    console.log('O nome é: ' , nome)
    console.log(typeof(nome))
    var paragrafo = document.getElementById("mensagem")
    paragrafo.textContent = 'Olá, '+ nome +'! Prazer em te conhecer!'
}
