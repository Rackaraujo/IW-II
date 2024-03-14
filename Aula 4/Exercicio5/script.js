function comprar(){
    var nome = prompt('Informe o nome do produto: ')
    console.log('O nome é: ' , nome)
    console.log(typeof(nome))
    var valor = prompt('Informe o valor do produto: ')
    console.log('O valor é: ' , valor)
    console.log(typeof(valor))
    var paragrafo = document.getElementById("mensagem")
    paragrafo.textContent = 'Você irá comprar um(a) '+ nome +' por R$' + valor
}