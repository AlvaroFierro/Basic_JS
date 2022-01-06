# Objetos literales

Antes de empezar a saber lo que son los objetos literales, es necesario saber que javascript es un lenguaje orientado a objetos. Estos objetos son **propiedades** (caracteristicas) y **métodos** (funciones) que se pueden asignar a una variable.

Los objetos literales son un tipo de objetos (sencillos)personalizados, que se pueden crear a partir de una serie de propiedades y métodos. **Y son transferibles**

## Sintaxis de los objetos literales

```javascript
var persona = {
  nombre: "Juan",
  colorOjos: "Cafe",
  edad: 25,
  vivo: true,
};
```

| Clave     | Valor  | Tipo de dato |
| --------- | ------ | ------------ |
| nombre    | "Juan" | string       |
| colorOjos | Cafe   | string       |
| edad      | 25     | int          |
| vivo      | true   | boolean      |

### Acceso a propiedades

Podemos acceder a las diferentes propiedades de nuestros objetos de la siguiente manera:

```javascript
let carro = {
  marca: "Ford",
  modelo: "Mustang",
  color: "Rojo",
  motor: 6.0,
};

console.log(carro.marca); // Ford
```
