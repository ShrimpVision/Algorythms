const array = [3, 5, 3, 65, 77, 1, 4, 9, 4, 8, 10, 44];


function isSorted(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > numbers[i + 1]) {
            return false;
        }
    }
    return true;
}

// Recursive solution
function bubbleSort(numbers) {

    // Base condition O(n)
    if (isSorted(numbers)) {
        return numbers;
    } else {

        // Iteration O(n)
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > numbers[i + 1]) {
                let up = numbers[i];
                let down = numbers[i + 1]
                numbers[i] = down;
                numbers[i + 1] = up;
            }
        }
    }
    // Recursive calling itself
    return bubbleSort(numbers);
}

console.log(bubbleSort(array));

// 03007906268 