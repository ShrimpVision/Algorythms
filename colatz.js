


function collatz(number) {
    // base case
    if (number === 1) {
        return 0;
    }
    if (number % 2 === 0) {
        return 1 + collatz(number/2);
    } else {
        return 1 + collatz(3*number +1);
    }
}

console.log(collatz(27));