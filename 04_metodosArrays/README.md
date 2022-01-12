# Metodos de arrays (arreglos)

Un método se refiere a una función para hacer más fácil la manipulación de un arreglo. Pero no significa que siempre los debamos de usar, ya que esto dependerá de nuestra necesidad.

| Nombre     | Descripcion                                                                                                                                                                                                    | Codigo                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| toString() | Este método nos permite convertir un arreglo en un string. **Cabe notar que tambien se puede usar en objetos**.                                                                                                | [toString()](#toString) |
| join()     | Tambien nos permite unir un arreglo en un string. Pero tambien nos permite separarlo con un caracter.                                                                                                          | [join()](#join)         |
| pop()      | Quita el último elemento de un arreglo                                                                                                                                                                         | [pop()](#pop)           |
| push()     | Añade un nuevo elemento al final de array                                                                                                                                                                      | [push()](#push)         |
| shift()    | Es equivalente a `pop()` pero quita el primer elemento del array                                                                                                                                               | [shift](#shift)         |
| unshift()  | Añade un nuevo elemento al inicio del array                                                                                                                                                                    | [unshift](#unshift)     |
| length     | Te dice la longitud del arreglo                                                                                                                                                                                | [length](#length)       |
| delete     | Elimina un elemento del arreglo **por lo que se debe de usar con cautela**                                                                                                                                     | [delete](#delete)       |
| concat()   | Crea un nuevo array ya que hace un merge X cantidad de arrays                                                                                                                                                  | [concat()](#concat)     |
| splice()   | Se usa para añadir nuevos elementos al array en cierta posicion. El primer parametro primera indica la posicion donde se deben de añadir los elementos y el segundo es cuantos elementos deben de ser borrados | [splice()](#splice)     |
| slice()    | Se usa de manera similar que `splice()` pero este crea un nuevo array y los elimina de ahí no del array padre (original)                                                                                       | [slice()](#slice)       |

## toString()

```javascript
let palabras = ["hola", "mundo", "manipulando", "el", "arreglo"];
let texto = palabras.toString();

console.log(texto); // hola,mundo,manipulando,el,arreglo
```

## join()

```javascript
let palabras = ["hola", "mundo", "manipulando", "el", "arreglo"];
let texto = palabras.join("-");

console.log(texto); // hola-mundo-manipulando-el-arreglo
```

## pop()

```javascript
let frutas = ["manzana", "pera", "uva", "naranja"];
let ultimaFruta = frutas.pop();

console.log(ultimaFruta); // naranja
console.log(frutas); // manzana,pera,uva
```

## push()

```javascript
let frutas = ["manzana", "pera", "uva", "naranja"];
frutas.push("limon");

console.log(frutas); // manzana,pera,uva,naranja,limon
```

## shift()

```javascript
let frutas = ["manzana", "pera", "uva", "naranja"];
let primeraFruta = frutas.shift();

console.log(primeraFruta); // manzana
console.log(frutas); // pera,uva,naranja
```

## unshift()

```javascript
let frutas = ["manzana", "pera", "uva", "naranja"];
frutas.unshift("limon");

console.log(frutas); // limon,manzana,pera,uva,naranja
```

## length

```javascript
let frutas = ["manzana", "pera", "uva", "naranja"];
let longitud = frutas.length;

console.log(`Longitud:`, longitud); // Longitud: 4
```

## delete

```javascript
let frutas = ["manzana", "pera", "uva", "naranja"];
delete frutas[1];
console.log(frutas); // manzana,uva,naranja
```

## concat()

```javascript
let frutas1 = ["manzana", "pera", "uva", "naranja"];
let frutas2 = ["limon", "fresa", "sandia"];
let frutas3 = frutas1.concat(frutas2);

console.log(frutas3); // manzana,pera,uva,naranja,limon,fresa,sandia
```

## splice()

```javascript
let frutas = ["manzana", "pera", "uva", "naranja"];
frutas.splice(0, 0, "adicion");

console.log(frutas); // adicion,manzana,pera,uva,naranja
```

## slice()

```javascript
let frutas = ["manzana", "pera", "uva", "naranja"];
let nuevoArreglo = frutas.slice(1, 2);

console.log(nuevoArreglo); // pera
```
