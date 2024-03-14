function reajustar() {
    var nome = prompt("Digite o nome do funcionário:")
    console.log('O nome é: ' , nome)
    console.log(typeof(nome))

    var salarioAtual = prompt("Digite o salário atual de " + nome + ":")
    console.log('O valor é: ' , salarioAtual)
    console.log(typeof(salarioAtual))

    var porcentagemReajuste = prompt("Digite a porcentagem de reajuste salarial para " + nome + ":");
    console.log('A porcentagem é:' , porcentagemReajuste)
    console.log(typeof(porcentagemReajuste))

    var salarioReajustado = salarioAtual * (1 + porcentagemReajuste / 100);

    var paragrafo = document.getElementById("mensagem")
    paragrafo.textContent = 'O salário atual de ' + nome + ' é: R$ ' + salarioAtual

    var paragrafoReajuste = document.getElementById("mensagemp");
    paragrafoReajuste.textContent = 'Com o aumento de ' + porcentagemReajuste + '%, o salário vai aumentar R$ ' +
    (salarioAtual * porcentagemReajuste / 100).toFixed(2) + ' no próximo mês.' 

    var paragrafo = document.getElementById("mensagemt")
    paragrafo.textContent = 'A partir daí, ' + nome + ' vai passar a ganhar R$' + salarioReajustado.toFixed(2);
    

}