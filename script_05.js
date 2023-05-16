// Condicionales if / else
// Algoritmo que dependiendo que si el usuario e smayor de 18 habilita un catalogo de peliculas violentas
// Si el pais es China, asi sea mayor de 18, no habilite el catalogo.Para el resto de paises, habilitelo.
let age = prompt("Ingresa tu edad");
let country = prompt("Ingresa tu país de origen");
if (age >= 18 && country != "china") {
  alert("Puedes ver tu peli sin problema");
} else {
  alert("No tienes permiso para ver esta peli");
}
