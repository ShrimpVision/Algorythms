// Finding factorials using a loop and using a recursive function

// 5! = 5 x 4 x 3 x 2 x 1
// 5! = 5 x 4!
// 5! = 5 x 4 x 3!

function findFactorialRecursive(number) {
    
    if (number === 2) {
        return 2;
    }
    return number * findFactorialRecursive(number - 1);
}

console.log(findFactorialRecursive(5));

function findFactorialIterative(number) {
    let answer = 1;
    if (number === 2) {
        answer = 2;
    }
    for (let i = 2; i <= number; i++) {
        answer = answer * i;
    }
    return answer
}

console.log(findFactorialIterative(5));