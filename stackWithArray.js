
class Stack {
    constructor() {
        this.array = [];
        
    }
    peek() {
        return this.array[this.array.length - 1];
    }
    push(value) {
        this.array.push(value);
        return this
    }
    pop() {
        this.array.pop;
        return this
    }
    isEmpty() {
        if (!this.array) {
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