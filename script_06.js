// Conversión de mayusculas y minusculas (toLowerCase) para minuscula  (toUpperCase) para mayuscula. SIempre poner para minuscula.se pone el punto antes del toLowerCase o toUpperCase
let age = parseInt(prompt("Ingresa tu edad"));
let country = prompt("Ingresa tu país de origen").toLowerCase();

console.log(age, country);
if (age == 0 || country == "") {
  alert("No ingresaste uno de los valores");
} else if (age >= 18 && country != "china") {
  alert("Puedes ver tu peli sin problema");
} else {
  alert("No tienes permiso para ver esta peli");
}
