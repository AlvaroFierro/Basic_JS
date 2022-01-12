# Metodos de arrays (arreglos)

Un método se refiere a una función para hacer más fácil la manipulación de un arreglo. Pero no significa que siempre los debamos de usar, ya que esto dependerá de nuestra necesidad.

| Nombre     | Descripcion                                                                                                                                                                                                               | Codigo                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| toString() | Este método nos permite convertir un arreglo en un string. **Cabe notar que tambien se puede usar en objetos**.                                                                                                           | [toString()](#toString) |
| join()     | Tambien nos permite unir un arreglo en un string. Pero tambien nos permite separarlo con un caracter.                                                                                                                     | [join()](#join)         |
| pop()      | Quita el último elemento de un arreglo                                                                                                                                                                                    | [pop()](#pop)           |
| push()     | `push()` añade un nuevo elemento al final de array                                                                                                                                                                        | [push()](#push)         |
| shift()    | `shift()` es equivalente a `pop()` pero quita el primer elemento del array                                                                                                                                                | [](#)                   |
| unshift()  | `unshift()` añade un nuevo elemento al inicio del array                                                                                                                                                                   | [unshift](#unshift)     |
| length     | `length` te dice la longitud del arreglo                                                                                                                                                                                  | [length()](#)           |
| delete     | `delete` elimina un elemento del arreglo **por lo que se debe de usar con cautela**                                                                                                                                       | [](#)                   |
| concat()   | `concat` crea un nuevo array ya que hace un merge X cantidad de arrays                                                                                                                                                    | [concat()](#)           |
| splice()   | `splice()` se usa para añadir nuevos elementos al array en cierta posicion. El primer parametro primera indica la posicion donde se deben de añadir los elementos y el segundo es cuantos elementos deben de ser borrados | [splice()](#)           |
| slice()    | `slice()` se usa de manera similar que `splice()` pero este crea un nuevo array y los elimina de ahí no del array padre (original)                                                                                        | [](#)                   |

## toString()

```javascript
let palabras = ["hola", "mundo", "manipulando", "el", "arreglo"];
let texto = palabras.toString();

console.log(texto); // hola,mundo,manipulando,el,arreglo
```

## join()

Tambien nos permite unir un arreglo en un string. Pero tambien nos permite separarlo con un caracter.

```javascript
let palabras = ["hola", "mundo", "manipulando", "el", "arreglo"];
let texto = palabras.join("-");

console.log(texto); // hola-mundo-manipulando-el-arreglo
```
