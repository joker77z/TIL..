class Stack {
  constructor() {
    this.arr = [];
  }

  push(item) {
    this.arr = [...this.arr, item];
  }
  pop() {
    const result = this.arr.slice(-1);
    this.arr = this.arr.slice(0, -1);
    return result;
  }
}

const test = new Stack();
test.push(3);
test.push(4);
console.log(test);
console.log(test.pop());
console.log(test);
