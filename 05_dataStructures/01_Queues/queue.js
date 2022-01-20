class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return !this.isEmpty() ? this.items[0] : undefined;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  remove(element) {
    let index = this.items.indexOf(element);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getIndex(element) {
    return this.items.indexOf(element);
  }

  sort() {
    this.items.sort();
  }

  sortInverted() {
    this.items.sort().reverse();
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(6);
queue.enqueue(8);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(7);
queue.enqueue(4);
queue.enqueue(5);
console.log("Queue=> ", queue.items);

console.log("Item deleted:", queue.dequeue());
console.log("Queue:", queue.items);

console.log("Peek:", queue.peek());

console.log("Is the queue empty?:", queue.isEmpty());

console.log("The size of the queue is:", queue.size());

// console.log("The original queue is cleared:", queue.items);

console.log("Removing items from the queue...");
console.log(queue.remove(3));
console.log(queue);

console.log("The index of the item is:", queue.getIndex(7));

console.log("Sorting the queue...");
queue.sort();
console.log(queue);

console.log("Sorting the queue in reverse...");
queue.sortInverted();
console.log(queue);
