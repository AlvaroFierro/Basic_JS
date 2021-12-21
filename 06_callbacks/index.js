// Callbacks
function saludar(nombre) {
  alert(`Hola, ${nombre}`);
}

function procesarInput(callback) {
  var nombre = prompt("Hola, por favor escribe tu nombre");
  callback(nombre);
}

procesarInput(saludar);
