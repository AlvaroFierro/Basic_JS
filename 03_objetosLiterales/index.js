// Las propiedades de los objetos se hacen con punto
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
  year: 1969,
};

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

console.log("----------------------------------------------------");
let carro = {
  marca: "Ford",
  modelo: "Mustang",
  color: "Rojo",
  motor: 6.0,
  carroseria: {
    tipo: "Coupe",
    motor: 6.0,
    rpm: 8000,
  },
};

console.log(carro);
console.log(`La marca del carro es:`, carro.marca); // Ford

carro.rin = "Azul";
console.log(`El rin :`, carro.rin); // Azul
console.log(carro);

console.log("Antes de eliminar el rin");
console.log(carro);

console.log("Eliminando un campo del objeto");
delete carro.rin;
console.log(carro);

console.log("----------------------------------------------------");

let computadora = {
  marca: "Asus",
  modelo: "X512DA",
  memoria: {
    ram: "8GB",
    vram: "2GB",
  },
  almacenamiento: {
    discoDuro: "500GB",
    ssd: "128GB",
  },
};

console.log(computadora.almacenamiento);

let gato = {
  nombre: "Kitten",
  edad: 5,
  ladrar: function () {
    return `${this.nombre} está ladrando`;
  },
};

console.log(gato.ladrar()); // Kitten está ladrando
