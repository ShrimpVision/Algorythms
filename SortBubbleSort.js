// Bubble sort compares two numbers and switches their place if
// the RHS number is smaller than the LHS otherwise it leaves it.
// Then compares next 2 numbers

inputArray = [6, 5, 3, 1, 8, 7, 2, 4];
inputArray2 = [1, 2, 2, 3, 6, 7];

// Check if already sorted
function isSorted(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i+1]) {
            return false;
        }
    }
    return true;
}

function bubbleSort(array) {
    // O (1)
    if (!array) {
        return "please input an array of numbers to sort"
    }
    // O (1)
    if (array.length <= 1) {
        return console.log("Nothing to sort!");
    }
    // O (n)
    if (isSorted(array)) {
        return console.log("already sorted!");
    }

    // Else perform bubble sort
    let temp = null;
    // O (n^2)
    while (!isSorted(array)) { 
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i+1]) {
                temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
            }
        }
        console.log(array);
    }

    return console.log(array);
}

// The overall Big O notation for this fucntion is O (3 + n^2)
// Which simplifies to Big O(n^2) or exponential time

bubbleSort(inputArray);
