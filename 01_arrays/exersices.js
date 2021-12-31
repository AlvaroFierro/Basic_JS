// EXERSICE 1
console.log("------------ EXERSICE 1 ------------");

// Create an array of three items whatever you want.
// Add it to a variable called myArray

// let myArray = ["Computer", "Laptop", "Phone"];
// console.log(myArray);

// // Modify the first two items with bracket notation

// myArray[0] = "Keyboard";
// myArray[1] = "Monitor";

// console.log(myArray);

// // Finnaly add a new item to the beginning of the array

// myArray.unshift("Chair");
// console.log(myArray);

// EXERSICE 2
console.log("------------ EXERSICE 2 ------------");

// Convert the next string into an array
// string = Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri
// Remove all the + characters & save the result in a variable called myArray

let myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";
let myArray = myString.split("+");

// Store the length of the array in a varibale called arrayLength

let arrayLength = myArray.length;
console.log("The length of the array is:", arrayLength);

// Store the last item in the array in a variable called lastItem

let lastItem = myArray[myArray.length - 1];
console.log("The last item is:", lastItem);

console.log(myArray);

let frutas = [
  "Manzana",
  "Jugo",
  "Computadora",
  "Teclado",
  "Raton",
  "RHCP",
  "Sacrifice",
  "Listen",
  "Trick",
];
console.log(frutas);
console.log(frutas.length);

let eliminar = frutas.splice(5, 2); // Posicion, numElementos
console.log(eliminar);
