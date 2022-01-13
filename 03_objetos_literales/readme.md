# Objetos literales

Antes de empezar a saber lo que son los objetos literales, es necesario saber que javascript es un lenguaje orientado a objetos. Estos objetos son **propiedades** (caracteristicas) y **métodos** (funciones) que se pueden asignar a una variable.

Los objetos literales son un tipo de objetos (sencillos)personalizados, que se pueden crear a partir de una serie de propiedades y métodos. **Y son transferibles**

## Tabla de contenidos

- [Sintaxis](#sintaxis)
- [Identificadores o valores](#identificadores-o-valores)
- [Propiedades](#propiedades)
- [Acceso a propiedades (dot notation)](#acceso-a-propiedades-dot-notation)
- [Acceso a propiedades (bracket notation)](#acceso-a-propiedades-bracket-notation)
- [Añadiendo elementos a un objeto después de crearlo](#añadiendo-elementos-a-un-objeto-después-de-crearlo)
- [Actualizando un elemento](#actualizando-un-elemento)
- [Eliminación de campos](#eliminación-de-campos)
- [Anidación de objetos](#anidación-de-objetos)

## Sintaxis

```javascript
let persona = {
  propiedad: "valor",
  nombre: "Juan",
  colorOjos: "Cafe",
  edad: 25,
  vivo: true,
};
```

| Clave     | Valor | Tipo de dato |
| --------- | ----- | ------------ |
| nombre    | Juan  | string       |
| colorOjos | Cafe  | string       |
| edad      | 25    | int          |
| vivo      | true  | boolean      |

## Identificadores o valores

Es el valor que se le asigna a una propiedad. Ejemplo:

```javascript
let objeto = {
  identificador1: "propiedad1",
  identificador2: "propiedad2",
  identificador3: "propiedad3",
};
```

## Propiedades

Las propiedades son los atributos de un objeto. Por ejemplo:

- **nombre**: es el nombre de la persona
- **colorOjos**: es el color de los ojos de la persona
- **edad**: es la edad de la persona
- **vivo**: es un booleano que indica si la persona está vivo o no

```javascript
let persona = {
  nombre: "Juan",
  colorOjos: "Cafe",
  edad: 25,
  vivo: true,
};
};
```

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

### Acceso a propiedades (bracket notation)

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

## Métodos en un objeto

Se pueden incorporar métodos a un objeto de la siguiente manera:

```javascript
let gato = {
  nombre: "Kitten",
  edad: 5,
  ladrar: function () {
    return `${this.nombre} está ladrando`;
  },
};

console.log(gato.ladrar()); // Kitten está ladrando
```

**Por motivos de scope de variables, para acceder los campos de un objeto dentro de un método, se debe usar la palabra reservada `this`.**

## Añadiendo elementos a un objeto después de crearlo

Podemos añadir elementos después de que hemos creado un objeto. Tan solo debemos de agregar el nombre del objeto seguido de la propiedad nueva y el valor nuevo a insertar: `objeto.propiedad = "valor"`

```javascript
carro.rin = "15";
console.log(carro.rin); // 15
```

## Actualizando un elemento

Se emplea la misma manera que cuando vamos a añadir un elemento, pero en vez de añadir un valor, se modifica el valor existente. `objeto.propiedad = "valor"`

```javascript
carro.motor = 8.0;
console.log(carro.motor); // 8.0
console.log(carro); // { marca: 'Ford', modelo: 'Mustang', color: 'Rojo', motor: 8.0, rin: '15' }
```

## Eliminación de campos

Tenemos que usar la palabra reservada `delete` para borrar una propiedad de un objeto.

```javascript
delete carro.rin;
/* {
  marca: 'Ford',
  modelo: 'Mustang',
  color: 'Rojo',
  motor: 6,
  rin: 'Azul'
}*/
```

## Anidación de objetos

También podemos anidar (poner) objetos dentro de otros objetos. Esto se hace de la siguiente manera:

```javascript
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

/*  
{
  discoDuro: '500GB',
  ssd: '128GB'
}
*/
```
