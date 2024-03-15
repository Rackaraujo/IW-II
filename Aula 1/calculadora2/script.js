document.addEventListener('DOMContentLoaded', function() {
    var calculatorContainer = document.getElementById('calculator-container');

    function calcular(operacao) {
        var num1 = parseFloat(document.getElementById('n1').value);
        var num2 = parseFloat(document.getElementById('n2').value);
        var resultado;

        switch (operacao) {
            case 'soma':
                resultado = num1 + num2;
                break;
            case 'subtracao':
                resultado = num1 - num2;
                break;
            case 'multiplicacao':
                resultado = num1 * num2;
                break;
            case 'divisao':
                resultado = num2 === 0 ? 'Não é possível dividir por zero!' : num1 / num2;
                break;
        }

        document.getElementById('result').innerText = 'Resultado: ' + resultado;
    }

    document.getElementById('btnSoma').addEventListener('click', function() {
        calcular('soma');
    });

    document.getElementById('btnSubtracao').addEventListener('click', function() {
        calcular('subtracao');
    });

    document.getElementById('btnMultiplicacao').addEventListener('click', function() {
        calcular('multiplicacao');
    });

    document.getElementById('btnDivisao').addEventListener('click', function() {
        calcular('divisao');
    });

    calculatorContainer.classList.remove('hidden');
});
