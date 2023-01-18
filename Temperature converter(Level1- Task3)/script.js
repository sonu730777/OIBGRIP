let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

function celcToFarn() {
  let output = (parseFloat(celsius.value) * 9) / 5 + 32;
  fahrenheit.value = parseFloat(output.toFixed(2));
}

function farnToCelc() {
  let output = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
  celsius.value = parseFloat(output.toFixed(2));
  console.log(output);
}
