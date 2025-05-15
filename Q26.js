class Queue {
  constructor() {
    this.items = [];
  }

  // Add item
  enqueue(item) {
    this.items.push(item);
  }

  // Remove item
  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items.shift();
  }

  // Peek front
  peek() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items[0];
  }

  // Check empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Size
  size() {
    return this.items.length;
  }
}

// Example usage
const queue = new Queue();
queue.enqueue("Tayyab");
queue.enqueue("Ali");
console.log(queue.dequeue()); // Outputs: "Tayyab"
console.log(queue.peek());    // Outputs: "Ali"
