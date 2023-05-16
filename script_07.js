let day = prompt("Ingresa el día").toLowerCase(); // usuario escribio martes - MARTES - MArtes
if (day == "sábado" || day == "domingo") {
  alert("Es un fin de semana");
} else {
  if (
    day == "lunes" ||
    day == "martes" ||
    day == "miercoles" ||
    day == "jueves" ||
    day == "viernes"
  ) {
    alert("Es un día entre semana");
  } else {
    alert("Escribiste una palaba incorrecta o ilógica. Favor escribir un dia");
  }
}
if (condition) {
    
} else {
    
}