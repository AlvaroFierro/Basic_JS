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
}
