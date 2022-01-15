# Callbacks

# ¿Que son?

Son funciones que son pasadas como argumentos a otras funciones. Recordemos la estructura de una función:

```javascript
function saludar(nombre) {
  alert(`Hola, {nombre}`);
}

function procesarInput(callback) {
  var nombre = prompt("Hola, por favor escribe tu nombre");
  callback(nombre);
}

procesarInput(saludar);
```
