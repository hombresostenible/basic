let transportation = prompt(
  "Tu medio de transporte es terrestre, aereo o acuatico?"
).toLowerCase();
let wheelsNumber = parseInt(prompt("Cuantas llantas tiene?"));
if (transportation == "terrestre" && wheelsNumber == 4) {
    alert("carro");
  } else if (transportation == "terrestre" && wheelsNumber <= 4) {
    alert("camion")
  } else {
    alert("")
  }{
    alert("0");
  }
  if (transportation == "terrestre" && wheelsNumber <= 4) {
    alert("camion");
  } else {
    alert("0");
  }
  if (transportation == "terrestre" && wheelsNumber == 2) {
    alert("bici o moto");
  } else {
    alert("0");
  }
  if (transportation == "terrestre" && wheelsNumber == 1) {
    alert("monociclo");
  } else {
    alert("0");
  }
  if (transportation == "acuatico" && wheelsNumber == 0) {
    alert("barco");
  } else {
    alert("");
  }