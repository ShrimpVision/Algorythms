const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 
'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']
const large = new Array(100000).fill('nemo')

// Number of operation is linearly proportional to amount of inputs (items in array)
function findNemo(array) {
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }
    let t1 = performance.now();
    // Function total time
    let t2 = t1 - t0
    console.log(`Call to find Nemo took ${t2} milliseconds.`)
}

findNemo(nemo); // O(n) --> Linear Time

