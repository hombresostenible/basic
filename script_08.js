let transportation = prompt(
  "¿Tu medio de transporte es terrestre, aéreo o acuático?"
).toLowerCase();
let wheelsNumber = parseInt(prompt("¿Cuántas llantas tiene?"));
console.log(wheelsNumber);
if (wheelsNumber == NaN || transportation == "") {
  alert("No ingresaste alguno de los datos. Intenta de nuevo");
} else if (transportation == "terrestre" && wheelsNumber == 4) {
  alert("carro");
} else {
  if (transportation == "terrestre" && wheelsNumber > 4) {
    alert("camion");
  } else {
    if (transportation == "terrestre" && wheelsNumber == 2) {
      alert("bici o moto");
    } else {
      if (transportation == "terrestre" && wheelsNumber == 1) {
        alert("monociclo");
      } else {
        if (transportation == "acuatico" && wheelsNumber == 0) {
          alert("barco");
        } else {
          if (transportation == "aereo" && wheelsNumber >= 20) {
            alert("avion");
          } else {
            alert(
              "No se reconoce ni el número de llantas ni el tipo de vehiculo. Vuelve a intentar"
            );
          }
        }
      }
    }
  }
}
