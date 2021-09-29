// Un objeto es una coleccion de propiedades, se puede comparar a algo tangible en la vida real. ==>
// En una persona, color, estatura, tez, etc.

// Las propiedades de los objetos se hacen con punto

// nombreObjeto.nombrePropiedad

// Son sensibles a mayusc y minusc

/* ----- La forma larga ----- */
// Tres propiedades con

var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

// console.log(myCar)

/* ----- Forma corta ----- */
// INICIADOR DE OBJETO, se separan por comas

var myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969, // al final no lleva coma
}; // Finaliza con ;

// console.log(myCar);

// Propiedades no asignadas son undefined

// mycar.color; // undefined
