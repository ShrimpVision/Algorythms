
arr1 = [0,3,4,31];
arr2 = [4,6,30];

function mergeSortedArray(ar1, ar2) {
    // Validation
    if (!ar1 || !ar2) {
        return "Invalid input"
    }
    // Create output array
    let mergedArray = [];
    let i = 0;
    let j = 0;

    // Compare data, addd whichever smallest to output
    for (let length = 0; length < (ar1.length + ar2.length); length++) {
        if (ar1[i] > ar2[j]) {
            mergedArray.push(ar2[j]);
            j++;
        } else {
            mergedArray.push(ar1[i]);
            i++;
        }
    }
    return mergedArray
}

console.log(mergeSortedArray(arr1,arr2));