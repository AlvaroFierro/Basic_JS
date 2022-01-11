# Objetos literales

Antes de empezar a saber lo que son los objetos literales, es necesario saber que javascript es un lenguaje orientado a objetos. Estos objetos son **propiedades** (caracteristicas) y **métodos** (funciones) que se pueden asignar a una variable.

Los objetos literales son un tipo de objetos (sencillos)personalizados, que se pueden crear a partir de una serie de propiedades y métodos. **Y son transferibles**

## Tabla de contenidos

- [Sintaxis](#sintaxis)
- [Acceso a propiedades (dot notation)](#acceso-a-propiedades-dot-notation)

## Sintaxis 

```javascript
var persona = {
  propiedad: "valor",
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

### Acceso a propiedades (dot notation)

Podemos acceder a las diferentes propiedades de nuestros objetos con notación de punto (dot notation) de la siguiente manera:

```javascript
let carro = {
  marca: "Ford",
  modelo: "Mustang",
  color: "Rojo",
  motor: 6.0,
};

console.log(carro.marca); // Ford
```

**Esta es la manera mas usada para acceder a las propiedades de un objeto.**

### Acceso a valor de propiedades (bracket notation)

Podemos acceder a las diferentes propiedades de nuestros objetos con notación de punto (dot notation) de la siguiente manera:

```javascript
let carro = {
  marca: "Ford",
  modelo: "Mustang",
  color: "Rojo",
  motor: 6.0,
};

console.log(carro["modelo"]); // Mustang
```

### Añadiendo elementos a un objeto después de crearlo

Podemos añadir elementos después de que hemos creado un objeto. Tan solo debemos de agregar el nombre del objeto seguido de la propiedad nueva y el valor nuevo a insertar: `objeto.propiedad = "valor"`

```javascript
carro.rin = "15";
console.log(carro.rin); // 15
```

### Actualizando un elemento

Se emplea la misma manera que cuando vamos a añadir un elemento, pero en vez de añadir un valor, se modifica el valor existente. `objeto.propiedad = "valor"`

```javascript
carro.motor = 8.0;
console.log(carro.motor); // 8.0
console.log(carro); // { marca: 'Ford', modelo: 'Mustang', color: 'Rojo', motor: 8.0, rin: '15' }
```
