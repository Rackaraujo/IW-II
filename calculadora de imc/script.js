function calculateIMC() {
  var height = parseFloat(document.getElementById("height").value.replace(',', '.'));
  var weight = parseFloat(document.getElementById("weight").value.replace(',', '.'));
  var gender = document.getElementById("gender").value;

  if (isNaN(height) || isNaN(weight)) {
      alert("Por favor, insira valores válidos para altura e peso.");
      return;
  }

  var bmi = weight / (height * height);

  var resultText = "Seu IMC é: " + bmi.toFixed(2) + "<br>";
  resultText += "Classificação: " + getIMCClassification(bmi, gender);

  document.getElementById("result").innerHTML = resultText;
}

function getIMCClassification(bmi, gender) {
  if (gender === "male") {
      if (bmi >= 40) return "Obesidade Mórbida";
      else if (bmi >= 30 && bmi < 40) return "Obesidade Moderada";
      else if (bmi >= 25 && bmi < 30) return "Obesidade Leve";
      else if (bmi >= 20 && bmi < 25) return "Peso Ideal";
      else return "Abaixo do Peso";
  } else {
      if (bmi >= 39) return "Obesidade Mórbida";
      else if (bmi >= 29 && bmi < 39) return "Obesidade Moderada";
      else if (bmi >= 24 && bmi < 29) return "Obesidade Leve";
      else if (bmi >= 19 && bmi < 24) return "Peso Ideal";
      else return "Abaixo do Peso";
  }
}
