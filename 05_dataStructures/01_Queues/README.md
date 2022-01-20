# Colas / Queues

Tabla de contenidos

- [Métodos](#metodos)

Una cola o queue por su nombre en ingles es una estructura de datos que nos permite almacenar elementos donde insertamos y eliminamos datos de los extremos.

Esto se le conoce como `FIFO` (First In First Out) o `First In First Out` (primero en entrar, primero en salir). Esto es traducido a la vida real de la siguiente manera:

> Imagina que estás en Spotify y quieres añadir una canción a una playlist. La canción que añadas a la playlist será la última en ser reproducida cuando reproduzcas la playlist y la primera que añades será la primera en ser escuchada.

La imágen es un poco más explicativa:

![Personas-en-la-fila-de-banco](https://www.javascripttutorial.net/wp-content/uploads/2019/12/queue-at-a-bank.png)

## Métodos

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

Para ver el código fuente de estos métodos, visita el siguiente enlace:
