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

/* ----- Accesores de propiedades ----- */

// Proporcionan acceso a las propiedades y metodos de un objeto

// Hint: la clave son los nombres de las propiedades y los metodos

// Podemos acceder a ellos como notacion por punto y notacion por corchete [operador de subscripcion]

/* ----- Notacion por punto ----- */

get = objeto.propiedad;
// Propiedad debe de ser un identificador valido de JS secuencia alfanumerica
// objeto.$1 === valido && objeto.1 != valido (invalido)
objeto.propiedad = set;

document.createElement("pre");

// "createElement" se recupera de document y se le llamat

/* ----- Notacion por corchetes ----- */

get = objeto[nombre_propiedad];
objeto[nombre_propiedad] = set;

// nombre_propiedad es un string, NO TIENE QUE SER UN IDENTIFICADOR VALIDO puede tener cualqueir valor "1foo" "!bar!" o incluso un espacio

document["createElement"]("pre");

// Hace lo mismo que el ejemplo de notacion por punto
// Ver linea 43

var foo = { propiedad_unica: 1 },
  bar = { propiedad_unica: 2 },
  objeto = {};
objeto[foo] = "valor";
alert(objeto[bar]);