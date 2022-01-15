# Callbacks

# ¿Que son?

Son funciones que son pasadas como argumentos a otras funciones. Recordemos la estructura de una función:

![Structure-of-a-function](https://ashwanig3.github.io/assets/media/Drawing.png)

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
