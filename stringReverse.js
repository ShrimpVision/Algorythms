const str = "Hi, my name is Daniel"

// string in an array
// each index must be reversed
// eg. if length is 10.

// [a, b, c, d]
//  0  1  2  3
// d = length - length
// c = lenth-index



// Method 1
function reverse(str) {
    // Check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'invalid input'
    }
    let outputArray = [];
    for (let i = str.length - 1; i >= 0; i--) {
        outputArray.push(str[i]);
    }
    return outputArray.join('')
}

// Method 2
function reverse2(str) {
    return str.split('').reverse().join('')
}

// Method 3 Arrow function way
const reverse3 = str => str.split('').reverse().join('');

// Method 4 destructuring
const reverse4 = str => [...str].reverse().join('');


console.log(reverse4(str));