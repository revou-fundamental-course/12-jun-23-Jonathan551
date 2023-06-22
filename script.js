function temperature() {
  var temperatureInput = parseFloat(document.getElementById("temperature").value);
  var unit1 = document.getElementById("unit1").value;
  var unit2 = document.getElementById("unit2").value;
  var result = document.getElementById("result");
  var rumus = document.getElementById("rumus");
  if (unit1 === "celsius"){
    if (unit2 === "celsius") {
        var celsius = (temperatureInput)
        result.innerHTML = "Celsius: " + celsius.toFixed(2) + "°C<br>";
        rumus.innerHTML = temperatureInput +"°C * 1"

      } else if (unit2 === "fahrenheit") {
        var fahrenheit = (temperatureInput * 9/5) + 32;
        result.innerHTML = "Fahrenheit: " + fahrenheit.toFixed(2) + "°F<br>";
        rumus.innerHTML = "("+temperatureInput +"°C * 9/5) +32"
    }

  }else if (unit1 ==="fahrenheit"){
    if (unit2 === "celsius") {
        var celsius = (temperatureInput-32) *5/9;
        result.innerHTML = "Celsius: " + celsius.toFixed(2) + "°C<br>";
        rumus.innerHTML = "("+temperatureInput +"°C - 32) * 5/9"
      
    } else if (unit2 === "fahrenheit") {
        var fahrenheit = (temperatureInput);
        result.innerHTML = "Fahrenheit: " + fahrenheit.toFixed(2) + "°F<br>";
        rumus.innerHTML = temperatureInput +"°F * 1"
    }
  }
}

function reset(){
  document.getElementById("temperature").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("rumus").innerHTML = "";

}