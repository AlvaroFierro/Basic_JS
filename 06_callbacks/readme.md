## Callbacks

### ¿Que son?

Son funciones dentro de otra funcion, pero es pasada en forma de argumento. Que es invocada afuera de otra funcion, con el fin de ejeutar alguna rutina/acccion.

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
