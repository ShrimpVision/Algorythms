// const basket = ['apples', 'grapes', 'pears'];

// const obj1 = { a: true};
// const obj2 = obj1;

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

// 1 --> 2 --> 10 --> 5 --> 16 --> null;
// 0     1     2      3     4      5

//  add 7 at node 2

// 1 --> 2 --> 7 -- >10 --> 5 --> 16 --> null;
// 0     1     2     4      5     6

class Node {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}

class linkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
    this.tail = this.head;
    this.length = 1;
    }

    // append(value) {
    //     const newNode = {
    //         value: value,
    //         next: null
    //     };
    //     this.tail.next = newNode;
    //     this.tail = newNode;
    //     this.length++;
    //     return this
    // }

    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(index, value) {

        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }

        const newNode = new Node(value);
        let currentNode = this.head;
        let previousNode = this.head;
        const foundIndex = null;
        // Find the node at index
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next
        }
        // Assign new node to point to the previous index node
        newNode.next = currentNode;
        // Previous node
        for (let i = 0; i < index - 1; i++) {
            previousNode = previousNode.next
        }
        previousNode.next = newNode;
        
        return this
    }

    remove(index) {
        
    }
}


const myLinkedList = new linkedList(10);
// console.log(myLinkedList)

myLinkedList.append(5);
// console.log(myLinkedList)

myLinkedList.append(16);
// console.log(myLinkedList)
myLinkedList.prepend(2);
myLinkedList.prepend(1);
console.log(myLinkedList.printList())

myLinkedList.insert(2, 7);

console.log(myLinkedList.printList())