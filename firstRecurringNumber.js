// myArray1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
myArray1 = [1, 2, 3, 4];

function firstRucurring(array) {
    let mySet = new Set();
    for (i=0; i < array.length; i++) {
        if (mySet.has(array[i])) {
            return array[i]
        }
        mySet.add(array[i]);
    }
    return undefined;
}

console.log(firstRucurring(myArray1));

// const mySet = new Set();

// mySet.add(1);
// mySet.add(2);
// mySet.add(3);
// mySet.add(4);
// mySet.add(5);

// console.log(mySet)

// console.log(mySet.has(5))


