
let wheelsNumber = parseInt(prompt("Cuantas llantas tiene?"));
if (
  wheelsNumber == 4 ||
  wheelsNumber <= 4 ||
  wheelsNumber == 2 ||
  wheelsNumber == 1
) {
  alert("terrestre");
} else if (wheelsNumber == 0) {
  alert("Es barco y acuatico");
} else {
  alert("Para la pregunta del numero de llantas escribe solo uno de los siguientes numeros: 20, 4,3,2,1 o 0.");
}
if (wheelsNumber == 20 && transportation == "aereo") {
    alert("Es avión")
} else {
    alert("Vuelve a escribir ")
}