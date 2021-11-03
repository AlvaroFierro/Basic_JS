// Arrays

// Son un un objeto global, de tipo lista de alto nivel.
// Se pueden crear arrays de diferentes tipos de datos.
// Se pueden crear arrays de diferentes tamaños.
// Se pueden crear arrays de diferentes niveles de anidamiento.
// Puedes efectuar tareas de recorrido y mutación

// Creando el array
// variable, nombre del array, [elementos]
// Se cuenta desde el cero [0,1,2,3,4]
let array = [
  "Elemento 1",
  "Elemento 2",
  "Elemento 3",
  "Elemento 4",
  "Elemento 5",
];
console.log(array);
console.log(`La longitud del array es de:`, array.length);

// Accediendo a un elemento del array por medio de su índice.
console.log(`El elemento en la posición 0 es:`, array[0]);
console.log(`El elemento en la posición 1 es:`, array[1]);
console.log(`El elemento en la posición 2 es:`, array[2]);

console.log("-------> Acceso al ultimo elemento del array <-------");
let ultimoElemento = array[array.length - 1];
console.log(`El último elemento del array es:`, ultimoElemento);

console.log("-------> Recorriendo un arreglo <-------");
// Poner el nombre del array, luego el forEach

array.forEach(function (elemento, indice, array) {
  console.log(elemento, indice);
});

console.log(
  "-------> Anadir un elemento al final del array  con push <-------"
);
let nuevoElemento = array.push("Elemento 6");
console.log(array);

console.log("-------> Eliminar el ultimo elemento con pop <-------");
let ultimoElementoEliminado = array.pop();
console.log(`Array despues de pop`, array);

console.log("-------> Anadir un elemento al principio con unshift <-------");
let nuevoElementoAnadido = array.unshift("Elemento 0");
console.log(array);

console.log("-------> Quitando un elemento al principio con shift <-------");
let elementoEliminado = array.shift();
console.log(`Se quito el primer elemento`, array);

console.log(
  "-------> Encontrar el indice de un elemento del array con indexOf <-------"
);
array.push("Elemento 7", "Elemento 8");
console.log(array);
let indice = array.indexOf("Elemento 7");
console.log(`El indice del elemento es:`, indice); // si es -1 no existe

console.log(
  "-------> Eliminar un elemento del array por su posicion con splice <-------"
);
let elementoEliminadoPorPosicion = array.splice(1, 2); // solo se pueden usar 2 elementos
console.log(`Se elimino el elemento:`, elementoEliminadoPorPosicion);
console.log(array);

console.log("-------> Copiando un array con slice <-------");
let arrayCopiado = array.slice();
console.log(arrayCopiado);

console.log(
  "-------> PUSH(), SPLICE(), ETC() MODIFICAN LA PROPIEDAD DEL ARRAY <-------"
);
