function reajustar(){
    var nome = prompt('Digite o nome do funcionário: ')
    console.log('O nome é: ' , nome)
    console.log(typeof(nome))
    var salario = prompt('Informe o salário de ' + nome)
    console.log('O valor é: ' , salario)
    console.log(typeof(salario))
    var pagamento = prompt('Informe a porcentagem que será reajustado o salário de' + nome)
    console.log('O reajuste foi de: ' , reajuste)
    console.log(typeof(reajuste))
    var paragrafo = document.getElementById("mensagem")
    paragrafo.textContent = 'O salário atual é' + salario
    var paragrafo = document.getElementById("mensagemp")
    paragrafo.textContent = 'O aumento será de ' + reajuste + ', ou seja, R$ ' + ' no próximo mês.'
    var paragrafo = document.getElementById("mensagemt")
    paragrafo.textContent = 'Você irá receber o troco de R$' + (pagamento-valor)
}