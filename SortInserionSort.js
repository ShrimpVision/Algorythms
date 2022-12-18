// Insertion sort
// Look at first item and leave where it is
// Look at next item, if next item is smaller, switch their places
// Then look at third item, if third item is smaller, shift to front
// Look at 4th item is larger than 3rd item currently, the leave in place
// Look at 5th item, if smaller than 4th but larger than 3rd, make it 4th and 4th make 5th etc.



const inputArray = [6,5,3,1,8,7,2,4];

function insertionSort(array) {

    const length = array.length;
    for (let i = 0; i < length; i++) {
        // move to first position
        if (array[i] < array[0]) {
            // remove element at position i, and put it to begining of array
            array.unshift(array.splice(i,1)[0]);
        } else {
            // find where number should go
            for (let j = 0; j < i; j++) {
                if (array[i] > array[j-1] && array[i] < array[j]) {
                    // move number to correct spot
                    // Take index at postion j, take and remove element at index i, put elemnt at index j
                    array.splice(j, 0, array.splice(i,1)[0]);
                }
            }
        }
    }



}