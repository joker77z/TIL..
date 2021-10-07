class Queue {
  constructor() {
    this.arr = [];
  }

  enqueue(item) {
    this.arr = [...this.arr, item];
  }
  dequeue() {
    const result = this.arr.slice(0, 1);
    this.arr = this.arr.slice(1);
    return result;
  }
}

const test = new Queue();
test.enqueue(3);
console.log(test);

test.dequeue(3);
console.log(test);
