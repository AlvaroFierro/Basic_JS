# Arrays, ¿Qué son?

Un array es un **objeto global** que permite almacenar varios valores de diferentes tipos, por ejemplo: strings, numeros, booleanos, objetos, etc.

Tanto la longitud como el tipo de los elementos de un array son variables. Y por ende pueden ser cambiados o mutables con el paso del tiempo.

Nota: en los arrays, **se cuenta desde 0, no desde uno**; esto quiere decir que la primer posicion (indice) es 0, la segunda es 1, la tercera es 2, etc. Si quieres puedes consultar el acceso a los elementos de un array [aqui:](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)

Tabla de contenidos:

- [Creando arrays](#creando-arrays)
- [Accediendo a un elemento de array mediante su indice](#accediendo-a-un-elemento-de-array-mediante-su-indice)
- [Recorriendo un array](#recorriendo-un-array)
- [Agregando elementos al final de un array](#agregando-elementos-al-final-de-un-array)
- [Quitando el ultimo elemento de un array](#quitando-el-ultimo-elemento-de-un-array)
- [Agregando elementos al principio de un array](#agregando-elementos-al-principio-de-un-array)
- [Quitando el primer elemento de un array](#quitando-el-primer-elemento-de-un-array)
- [Encontrando el indice de un elemento de un array](#encontrando-el-indice-de-un-elemento-de-un-array)
- [Copiando un array](#copiando-un-array)
- [Eliminar varios elementos de acuerdo a x posiciones](#eliminar-varios-elementos-de-acuerdo-a-x-posiciones)
- [Recorriendo un arreglo](#recorriendo-un-arreglo)

### Creando arrays

```javascript
let frutas = ["Manzana", "Banana"];

// Consultando la lontigud del array
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

### Recorriendo un array

```javascript
frutas.forEach(function (elemento, indice, array) {
  console.log(elemento, indice);
});

// Manzana 0
// Banana 1
// ...
```

### Agregando elementos al final de un array

```javascript
let ultimo = frutas.push("Naranja");
// ['Manzana', 'Banana', 'Naranja']
```

### Quitando el ultimo elemento de un array

```javascript
let ultimo = frutas.pop();
// ['Manzana', 'Banana']
```

### Agregando elementos al principio de un array

```javascript
let principio = frutas.unshift("Melon");
// ['Melon', 'Manzana', 'Banana']
```

### Quitando el primer elemento de un array

```javascript
let inicio = frutas.shift();
// ['Manzana', 'Banana']
```

### Encontrando el indice de un elemento de un array

```javascript
frutas.push("Pera");

let posicion = frutas.indexOf("Pera");
// 3
```

### Copiando un array

Hay que saber que hay dos maneras de poder hacer esto, uno con JavaScript y otro con ES6. Pero **nada de esto afectara al array original**, ya que es una copia. Diriamos que sería como `Ctrl+C` + `Ctrl + V` en un editor de texto.

**Javascript**

```javascript
let copia = frutas.slice();
// ['Manzana', 'Banana', 'Pera']
```

**ES6**

```javascript
// Forma más corta
let copia = [...frutas];
// ['Manzana', 'Banana', 'Pera']
```

### Eliminar varios elementos de acuerdo a x posiciones

```javascript
console.log(frutas);
/*[ "Manzana", "Jugo",
  "Computadora", "Teclado",
  "Raton", "RHCP",
  "Sacrifice", "Listen",
  "Trick"
]*/

let eliminar = frutas.splice(5, 2); // Posicion, numElementos
console.log(eliminar);
// ['RHCP', 'Sacrifice']
```

### Recorriendo un arreglo

En ciertos casos vamos a requerir saber el contenido de un arreglo en poco tiempo, es por eso que tendremos que usar for.

```javascript
let arregloLargo = [
  "Hola",
  23,
  "Luis",
  "Miguel",
  true,
  false,
  "Chanchito",
  "Feliz",
  50,
  false,
];

for (i = 0; i < arregloLargo.length; i++) {
  console.log(arregloLargo[i]);
}
```

Para más información, consultar la documentación oficial [aqui](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)

Si quieres practicar lo aprendido checa los siguientes [ejercicios](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Test_your_skills:_Arrays) 👀

hkahd
