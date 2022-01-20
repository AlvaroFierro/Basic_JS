# Colas / Queues

Tabla de contenidos:

- [Métodos](#metodos)
- [Explicación](#explicacion)
  - [Constructor](#constructor)
  - [Enqueue](#enqueue)
  - [Dequeue](#dequeue)

Una cola o queue por su nombre en ingles es una estructura de datos que nos permite almacenar elementos donde insertamos y eliminamos datos de los extremos.

Esto se le conoce como `FIFO` (First In First Out) o `First In First Out` (primero en entrar, primero en salir). Esto es traducido a la vida real de la siguiente manera:

> Imagina que estás en Spotify y quieres añadir una canción a una playlist. La canción que añadas a la playlist será la última en ser reproducida cuando reproduzcas la playlist y la primera que añades será la primera en ser escuchada.

La imágen es un poco más explicativa:

![Personas-en-la-fila-de-banco](https://www.javascripttutorial.net/wp-content/uploads/2019/12/queue-at-a-bank.png)

# Métodos

Las colas tienen 2 métodos principales:

- `enqueue` o `encolar`: Inserta un elemento al final de la cola
- `dequeue` o `desencolar`: Elimina el primer elemento de la cola

Sus métodos secundarios son:

- `peek` o `ver`: Devuelve el primer elemento de la cola sin eliminarlo
- `isEmpty` o `estaVacia`: Devuelve `true` si la cola está vacía
- `size`: Devuelve el número de elementos en la cola
- `clear` o `limpiar`: Elimina todos los elementos de la cola
- `remove` o `eliminar`: Elimina un elemento específico de la cola
- `getIndex` o `getIndice`: Devuelve el índice de un elemento específico de la cola
- `sort` o `ordenar`: Ordena los elementos de la cola

Para ver el **código completo** de los métodos, visita el siguiente [enlace](.\queue.js)

# Explicación

La explicacion detallada de cada cosa aqui ⤵

## Constructor

Primero debemos de empezar a crear el constructor de la clase de la cola. Esto lo que nos va a permitir será crear un objeto con la clase llamada `queue` y posteriormente llamar a cada método de la clase.

```js
class Queue {
  constructor() {
    this.items = [];
  }
```

## Enqueue

Este metodo como ya vimos, nos permite insertar un elemento al final de la cola.

```js
unshift(element){
  this.items.unshift(element);
}
```

## Dequeue

Este metodo nos permitira eliminar el primer elemento de la cola.

```js
dequeue();
{
  return this.items.shift();
}
```

## Peek

Devuelve el primer valor de la cola sin eliminarlo.

```js
 peek() {
    return !this.isEmpty() ? this.items[0] : undefined;
  }
```

## IsEmpty

```js
 isEmpty() {
    return this.items.length === 0;
  }
```

## size

```js

```

## clear

```js

```

## remove

```js

```

## getIndex

```js

```

## sort

```js

```
