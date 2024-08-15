var dividendo = document.getElementById("dividendo");
var divisor = document.getElementById("divisor");

function dividir() {
  var resultado = parseInt(dividendo.value / divisor.value);
  var residuo = dividendo.value % divisor.value;

  alert("El resultado de la división es: " + resultado + " y el residuo es: " + residuo);
}