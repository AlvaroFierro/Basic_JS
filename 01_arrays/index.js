// Arrays

// Un array (arreglo/ matriz) es un obketo "list-like"
// Se almacenan ciertos tipos de valores en una lista, tambien pueden ser almacenados en una variable los arreglos
// Se puede acceder a cualquier elemento del arreglo

// Evita que tengas que usar muchas variables

// Estructura -->
// var / let (dependiendo del scope) nombre = ['elemento1', 'elemento 2', 'elemento3', ...]

// Su posicion   0              1             2

var array = ["Elemento 1", "Elemento 2", "Elemento 3"];

console.log(array);

// Podemos acceder a ellos desde la posicion que quieras

console.log(array[0]); // Elemento 1
console.log(array[1]); // Elemento 2
console.log(array[2]); // Elemento 3
// // console.log(array[3]) // Imprime undefined porque no esta dentro del array

// Los objetos se definen -->
// var objeto = {
// nombreObjeto: "Nombre",
// propiedad: "Lo que sea",
// ...
// }

var carros = {
  marca: "chevrolet",
  cantidad: "15",
  submarca: "volvo",
};

// Añadir elementos al final del array

var nuevoArray = array.push("Elemento 4"); // Añade el elemento4
console.log(nuevoArray);

// Longitud del arreglo .length

let frutas = ["Manzana", "Banana"];
console.log(frutas.length);

// Eliminar el ultimo elemento del array

console.log(frutas); // Antes de eliminar 'Banana'
let frutasEliminadas = frutas.pop();
console.log(frutas); // Despues de eliminar

// Añadir elemento al principio del array

let nuevaLongitud = frutas.unshift("Frambuesa", "Pera", "Guayaba");
console.log(frutas);

// Eliminar el primer elemento del array
let principio = frutas.shift(); // Frambuesa
console.log(frutas);

// Encontrar el indice o el numero en el que se encuentra el elemento en el array

frutas.push("Sandia");

let pos = frutas.indexOf("Sandia"); // Posicion 2 del array
console.log(frutas);
console.log(pos);

// Eliminar elementos mediante su posicion

console.log(frutas);
let elementoEliminado = frutas.splice(-3, 1);
console.log(frutas);

// Copiar un array

let copiaArray = frutas.slice();
console.log("Esta es la copia", copiaArray);

// Concatenar dos arrays

let unArray = ["Hola", "este", "array", "se", "unira"];
let otroArray = ["con", "este", "otro"];

let unionArrays = unArray.concat(otroArray);
console.log("Array concatenado", unionArrays);

// Invertir el orden del array

let ordenInverso = unionArrays.reverse();
console.log(ordenInverso);
