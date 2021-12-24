# [Arrays](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)

Un array es un **objeto global** que permite almacenar varios valores de diferentes tipos, por ejemplo: strings, numeros, booleanos, objetos, etc.

Tanto la longitud como el tipo de los elementos de un array son variables. Y por ende pueden ser cambiados o mutables con el paso del tiempo.

### Creando arrays

```javascript
let frutas = ["Manzana", "Banana"];

console.log(frutas.length);
// 2
```

### Accediendo a un elemento de array mediante su indice

```javascript
let primero = frutas[0];
// Manzana

let ultimo = frutas[frutas.length - 1];
// Banana
```
