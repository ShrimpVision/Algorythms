// lets build an array from scratch

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return this.length;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index)
    }

    shiftItems(index) {
        for (let i = index; i < this.length -1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length -1 ];
        this.length--;
    }


}

const newArray = new MyArray();

newArray.push('hi');
newArray.push('my');
newArray.push('name');
newArray.push('is');
newArray.push('Danjeet');


console.log(newArray);

newArray.delete(2);

console.log(newArray);