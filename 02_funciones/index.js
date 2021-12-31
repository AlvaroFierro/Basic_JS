// Functions are parts of code that can be reusable, so u can use x quantity of times

// ---- Simple functions ---- //
console.log("Simple functions");
function greet(name, lastName) {
  console.log("Hi there", name, "& your last name is:", lastName);
}
// Dont forget to call the function and send which params u want to pass
greet("Alvaro", "Fierro");

// ---- Functions expression ----
console.log("Functions expression");
const speak = function name() {
  console.log("This is a functions expression");
};
// You have to select the const, var, or let where ur function is
speak();

// ----- HOISTING ------ //

// Works with normal functions but not with function expressions, with normal expressions u can call for the functions before using it or sending params.

console.log("This will be with hoisting");

greet("Alvaro");

function greet(name) {
  console.log("Hi my name is", name);
}

console.log("This also works");

greet("Alvaro");

let sayHi = function greet(name) {
  console.log("Hi my name is", name);
};

// That's why you're declaring into a variable (no matter what type of variable (let/var/const))

// ----- Arguments & parameters //
console.log("Arguments & params");
const shiftHours = function (name, time) {
  console.log(`Have a good ${time} ${name}`);
};

shiftHours("Alvaro", "morning");

// console.log("This also will work \n arguments & params");

// console.log("Arguments & params");
// const shiftHours = function (name = "Licha", time = "Night") {
//   console.log(`Have a good ${time} ${name}`);
// };
// shiftHours();

// ----- Retuning values -----

// console.log("Calculating area");
// let calArea = function (radius) {
//   return (area = 3.14 * radius ** 2);
//   // But here doesn't pop up
// };

// // We've to define a new variable to get that data out of there

// const area = calArea(5);
// console.log(area);
// // This isn't gonna work
// // console.log(area);

// ----- Arrow functions -----
// console.log("Arrow functions");
// const calcArea = radius;

function suma(a, b) {
  return a + b;
}

// with arrow function

// First way
(a) => {
  return a + 5;
};
// Second way
(a) => a + 5;
// Third way
(a) => a + 5;

// If there are more than one value you have to put into ()

const calcArea = (radius) => 3.14 * radius ** 2;

const area = calcArea(5);
console.log("area is:", area);

// var sal = function () {
//   return "hello world";
// };
// var out = sal(); // store insde a var DONT FORGET THE PARENTHESIS
// console.log(out); // call for the function through the var

var val = () => "hello world"; // it ends the arrow function
var out = val(); // DONT FORGET THE PARENTHESIS
console.log(out); // call for the function through the var

// ----- Products and taxes -----

const bill = function (products, tax) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

console.log("The final price is", bill([(10, 20, 30)], 0.16));

var chanchitoFeliz = "Alvaro";
console.log(chanchitoFeliz.toUpperCase()); // dont forget use () eg. .toUpperCase()
