var nombre = "Alvaro";
function primerSaludo() {}
console.log("Hola mundo, me llamo", nombre);
primerSaludo();

// // Expresiones Funcionales

const segundoSaludo = function () {
  console.log("Hola, me llamo", nombre);
};
segundoSaludo();

// Arrow functions

const tercerSaludo = () => {
  // un igual y un mayor que
  console.log("Este es el tercer saludo de", nombre);
};

// tercerSaludo()

/* ----- Functions ----- */

// Basic functions

function greet() {
  console.log("Hello There");
}
// don't forget to call the function
greet();

/* ----- Functions expressions ----- */
// We can also declarate functions on variables

const speak = function () {
  console.log("Have a nice day!");
};
speak();

/* ----- Hoisting ----- */
// You can call a function before you declared it eg.
// NOTE: It doesn't work with variables or funcions expressions

wave();

function wave() {
  console.log("This is a wave working on it!");
}

/* ----- Arguments & parameters ----- */

const speech = function (name, time) {
  // (name) --> is called parameter
  console.log(`Hi ${name} have a good ${time}`);
};
speech("Alvaro", "morning"); // this is an argument :)

// We can asiggn values inside the parameters

const speeching = function (name = "Alvaro", time = "night") {
  console.log(`Hi ${name} have a good ${time}`);
};
speeching(); // this is an argument :)
// If you add values inside of speeching("Chris", "Morning")
// THIS WILL BE OVERWRITED

const calcArea = function (radius) {
  //   let area = 3.14 * radius ** 2;
  return 3.14 * radius ** 2; // This can let you access later, outside of the scope
};

const area = calcArea(5);
console.log(area);

const calcVol = function (area) {};

calcVol(area);

/* ----- Arrow functions ----- */

const arrowFunctionCalcArea = (radius) => 3.14 * radius ** 2;
const arrowFunction = arrowFunctionCalcArea(5);
console.log("area is:", area);

// const meet = function () {
//   return "hello, world";
// };

const meet = () => "hello world";
const result = meet();
console.log(result);

/* ----- Exercises ----- */

// Turn the follwowing function into a arrow function

// const bill = function (products, tax) {
//   let = total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

console.log(bill([10, 15, 30], 0.2));

/* ----- Methods & synonymous -----*/

// Methods & synonymous ara kind the same thing

// Functions
const sayHi = () => "hello";
let resultOne = sayHi();
console.log(resultOne);

// Methods

const name = "Alvaro";

let resultTwo = name.toUpperCase();
console.log(resultTwo);

/* ----- Callbakcs & foreach ----- */

const myFunc = (callbackFunc) => {
  //do something
  let value = 50;
  callbackFunc(value);
};

// myFunc(function (value) {
//   // we've to declare that parameter (value)
//   //do something
//   console.log(value);
// });

myFunc((value) => {
  // we've to declare that parameter (value)
  //do something
  console.log(value);
});
// We can also pass in a function as an argument & wehn we do this the functions is called a callback function

// let people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

// people.forEach((person, index) => {
//   console.log(index, person);
// });

// get a reference to the 'ul'

const ul = document.querySelector(".people");

const people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

let html = ``;

people.forEach((person) => {
  //create HTML template
  html += `<li style="color:purple">${person}</li> `;
});

console.log(html);
ul.innerHTML = html;
