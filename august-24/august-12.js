/*

Implement a stack API using only a heap. A stack implements the following methods:

push(item), which adds an element to the stack
pop(), which removes and returns the most recently added element (or throws an error if there is nothing on the stack)
Recall that a heap has the following operations:

push(item), which adds a new key to the heap
pop(), which removes and returns the max value of the heap

*/


class Stack {
    constructor() {
        this.heap = [];
        this.counter = 0;
    }

    push(item) {
        this.counter--;
        this.heap.push([this.counter, item]);
        this.heap.sort((a, b) => a[0] - b[0]);
    }

    pop() {
        if (this.heap.length === 0) {
            throw new Error("Stack is empty");
        }
        return this.heap.shift()[1];
    }
}

// Test Cases
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop()) // Expect 30
console.log(stack.pop()) // Expect 20
console.log(stack.pop()) // Expect 10
