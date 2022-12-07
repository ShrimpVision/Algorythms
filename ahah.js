
pattern = ['-', '--', '---', '----', '-----', '----', '---', '--'];
var count = 0;

function chaos(pattern) {
    for (let i = 0; i < pattern.length; i++) {
        console.log(pattern[i]);
    }
    console.log(count);
    count++;
    return chaos(pattern);
}

chaos(pattern);

// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed