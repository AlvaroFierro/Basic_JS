# Metodos de arrays (arreglos)

Un método se refiere a una función para hacer más fácil la manipulación de un arreglo. Pero no significa que siempre los debamos de usar, ya que esto dependerá de nuestra necesidad.

| Nombre     | Descripcion                                                                                                     | Codigo                  |
| :--------- | :-------------------------------------------------------------------------------------------------------------- | ----------------------- |
| toString() | Este método nos permite convertir un arreglo en un string. **Cabe notar que tambien se puede usar en objetos**. | [toString()](#toString) |
| join()     | Tambien nos permite unir un arreglo en un string. Pero tambien nos permite separarlo con un caracter.           | [join()](#join)         |

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
