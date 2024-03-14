function calcularDelta() {
    var a = parseFloat(prompt("Digite o valor de a:"));
    var b = parseFloat(prompt("Digite o valor de b:"));
    var c = parseFloat(prompt("Digite o valor de c:"));

    var delta = Math.pow(b, 2) - 4 * a * c;
    
    var resultadoHTML = "A equação atual é: " + a + "x^2 + " + b + "x + " + c + " = 0<br>";
    resultadoHTML += "O cálculo realizado foi: Δ = b^2 - 4ac<br>";
    resultadoHTML += "O valor calculado foi: Δ = " + delta;
    
    document.getElementById("resultado").innerHTML = resultadoHTML;
}
