// Selection sort finds smallest elemnt and swaps it to the first position

inputArray = [8,5,2,6,9,3,1,4,0,7];

function selectionSort(array) {
    // Conditionals skipped on purpose 

    let smallestNumber = array[0];
    let smallestNumberIndex = 0;

    for (let j = 0; j < array.length; j++) {
        
        smallestNumber = array[j];
        smallestNumberIndex = j;

        for (let i = j; i < array.length; i++) {
            if (array[i] < smallestNumber) {
                smallestNumber = array[i];
                smallestNumberIndex = i;
            }
        }
        array[smallestNumberIndex] = array[j];
        array[j] = smallestNumber;
    }
    return console.log(array);

}

selectionSort(inputArray);