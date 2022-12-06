// Stacks - last in first out LIFO
// Queues - first in first out FIFO


// Created my own stack

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top.value;
    }
    push(value) {
        const stack = new Node(value)
        stack.next = this.top;
        this.top = stack;
        this.length++
        return this
    }
    pop() {
        this.top = this.top.next
        this.length--
        return this
    }
    isEmpty() {
        if (!this.top) {
            return true;
        }
    }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('discord');
myStack.push('udemy');
myStack.push('skillshare');

myStack.pop();

console.log(myStack.peek())

console.log(myStack);
// console.log(myStack.isEmpty());