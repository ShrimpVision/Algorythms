class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first.value;
    }
    enqueue(value) {
        const node = new Node(value);
        if (this.length === 0) {
            this.first = node;
            this.last = node;
            this.length++;
        } else {
            this.last.next = node;
            this.last = node;
        }
        return this;
    }
    dequeue() {
        this.first = this.first.next;
        return this
    }
    isEmpty() {
        if (!this.first) {
            return true
        } 
        return false;
    }
}

const myQueue = new Queue();

myQueue.enqueue('Joy');
myQueue.enqueue('Sartah');
myQueue.enqueue('Wilson');
myQueue.enqueue('Gaerry');

// myQueue.dequeue();

console.log(myQueue.peek());