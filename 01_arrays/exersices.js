// console.log("------------ EXERSICE 1 ------------");

// // Create an array of three items whatever you want.
// // Add it to a variable called myArray

// let myArray = ["Computer", "Laptop", "Phone"];
// console.log(myArray);

// // Modify the first two items with bracket notation

// myArray[0] = "Keyboard";
// myArray[1] = "Monitor";

// console.log(myArray);

// // Finnaly add a new item to the beginning of the array

// myArray.unshift("Chair");
// console.log(myArray);

// console.log("------------ EXERSICE 2 ------------");

// // Convert the next string into an array
// // string = Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri
// // Remove all the + characters & save the result in a variable called myArray

// let myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";
// let myArray = myString.split("+");

// // Store the length of the array in a variable called arrayLength

// let arrayLength = myArray.length;
// console.log("The length of the array is:", arrayLength);

// // Store the last item in the array in a variable called lastItem

// let lastItem = myArray[myArray.length - 1];
// console.log("The last item is:", lastItem);
// console.log(myArray);

// console.log("------------ EXERSICE 3 ------------");

// // For this array task, we provide you with a starting array and you will work
// // in somewhat the oppostie direction. You need too:

// // 1. Remove the last item in the array

// let myArray = [
//   "Ryu",
//   "Ken",
//   "Chun-Li",
//   "Cammy",
//   "Guile",
//   "Sakura",
//   "Sagat",
//   "Juri",
// ];
// console.log(myArray);
// console.log(`Last item deleted:`, myArray.pop());

// // 2. Add two new names to the end of the array

// myArray.push("Item 1", "Item 2");
// console.log(myArray);

// // 3. Go over each item in the array and add its index number after the name inside parentheses for example Ryu (0).

// let numberAfterName = (name, index) => {
//   return `${name} (${index})`;
// };

// console.log(myArray.map(numberAfterName));

// // 4. Finally, join the array items together in a single string called myString, with a separator of "-"

// let myString = myArray.join("-");
// console.log(myString);

// console.log("------------ EXERSICE 4 ------------");

// // For this array task, we provide you with a starting array
// // listing the names of some birds. You have to:

// // 1. Find the index of "Eagles" item, and use that to remove the "Eagles" item
// const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

// const deleteEagles = (array) => {
//   let index = array.indexOf("Eagles");
//   array.splice(index, 1);
//   return array;
// };

// console.log(deleteEagles(birds));

// // 2. Make a new array called eBirds, that contains only bird from the original
// // whose names begin with "E".

// const eBirds = birds.filter((bird) => bird.startsWith("E"));
// console.log(eBirds);

console.log("------------ EXERSICE 5 ------------");

// Create an array, and store it in a variable called myArray
// Store minimum 8 elements into it

let myArray = [
  "RAM",
  "VRAM",
  "CPU",
  "Monitor",
  "x86",
  "x64",
  "Cooler",
  "Fan Ceiling",
];

// Loop that array and it has to show: "The value in the position x is y"
// Where x is the position (starting with 0)
// Where y is the value of the element
// Eg. The value in the position 0 is RAM

for (let i = 0; i < myArray.length; i++) {
  let element = myArray[i];
  console.log(`The value in the position ${i} is ${element}`);
}
