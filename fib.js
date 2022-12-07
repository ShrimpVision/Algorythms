// 5! = 5 x 4 x 3 x 2 x 1

// call it self
// have a base case
// work towards base case

// Fibonnaci next is equl to sum of last 2
//  so basically n = n-1 + n-2

function fibRecursive(n) {
    // base case
    if (n < 2) {
        return n
    }
// Call it self and reduce towards base case
    return fibRecursive(n-1) + fibRecursive(n-2)
}


