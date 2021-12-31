// Una queue (o cola) es una estructura de datos en la que los elementos se encolan de manera FIFO (First In First Out), es decir, el primero en entrar es el primero en salir.

// Ejemplo de uso:

// Queue class
class Cola {
  // Constructor
  constructor() {
    // Inicializa un array vacío
    this.items = [];
  }

  // FUNCIONES A IMPLEMENTAR

  // Agrega un elemento al inicio de la cola
  unshift(element) {
    this.items.unshift(element);
  }

  // Enqueue (Agregar un elemento a la cola)
  enqueue(element) {
    // Agrega un elemento al final del array
    this.items.push(element);
  }

  // Dequeue (Remover un elemento de la cola)
  dequeue() {
    // Retorna el primer elemento del array
    return this.items.shift();
  }

  // Front (Retorna el primer elemento de la cola) PERO NO LO REMUEVE
  front() {
    return this.items[0];
  }

  // Size (Retorna el número de elementos en la cola)
  size() {
    // Retorna el tamaño del array
    return this.items.length;
  }

  // isEmpty (retorna true si la cola esta vacia)
  isEmpty() {
    return this.items.lenght === 0;
  }

  // toString (retorna un string con todos los elementos de la cola)
  toString() {
    // Retorna un string con todos los elementos de la cola
    return this.items.join(",");
  }

  // clear (remueve todos los elementos de la cola)
  clear() {
    // Vacia el array
    this.items = [];
  }

  // contains (retorna true si el elemento esta en la cola)
  contains(element) {
    // Retorna true si el elemento esta en la cola
    return this.items.indexOf(element) !== -1;
  }

  // remove (remueve un elemento de la cola)
  remove(element) {
    // Busca el elemento en el array y lo remueve
    let index = this.items.indexOf(element);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  // getIndex (retorna el indice del elemento)
  getIndex(element) {
    // Busca el elemento en el array y lo remueve
    let index = this.items.indexOf(element);
    return index;
  }

  // reverse (invierte el orden de los elementos de la cola)
  reverse() {
    this.items.reverse();
  }

  // sort (ordena los elementos de la cola)
  sort() {
    this.items.sort();
  }

  //Muestra la cola
  print() {
    return this.items;
  }
}
const cola = new Cola();
console.log(cola);

console.log("/// Agregando elementos al final con enqueue ///");
cola.enqueue("a");
cola.enqueue("b");
cola.enqueue("c");
console.log(cola);

console.log("/// Removiendo elementos con dequeue ///");
console.log("En este caso elimina el primer elemento (a)");
console.log(cola.dequeue());
console.log(cola);

console.log("/// Regreso del primer elemento con front ///");
console.log(cola);
console.log(cola.front());

console.log("/// Tamaño de la cola ///");
console.log(cola.size());

console.log("/// Revisar si la cola esta vacia////");
console.log(cola);
console.log(cola.isEmpty());

// console.log("/// Remueve todos los elementos de la cola ///");
// console.log(cola);
// console.log(cola.clear());
// console.log(cola);

console.log("/// Remover un elemento especifico ///");
console.log(cola);
console.log(cola.remove("b"));
console.log(cola);

console.log("ANADIENDO ITEMS");
cola.unshift("Elemento 3");
cola.unshift("Elemento 2");
cola.unshift("Elemento 1");
console.log(cola);

console.log("/// Retornar el indice del elemento ///");
console.log(cola.getIndex("Elemento 1"));
console.log(cola.getIndex("Elemento 2"));
console.log(cola.getIndex("Elemento 3"));

console.log("/// Cola en reversa ///");
console.log(cola);
cola.reverse();
console.log(cola);

console.log("/// Ordenar la cola ///");
console.log(cola);
cola.sort();
console.log(cola);

console.log(
  "Metodos en DEVF: \nqueue\ndequeue\nisEmpty\nfront\nback\nsize\nprint\n",
  "Metodos que aprendi: \nunshift\nenqueue\ndequeue\nfront\nsize\nisEmpty\nremove\ntoString\nclear\nreverse\nsort"
);

console.log("/// Mostrando la cola ///");
console.log(cola.print());
