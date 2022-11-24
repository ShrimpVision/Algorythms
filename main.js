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

// *********************

const boxes = [0,1,2,3,4,5];

// Number of operation is equl to lines of code in block, in this case O(2), 
// Usualy denoted as O(1) as constants are dropped
function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes) // O(2) --> Constant Time

// *********************

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
    let a = 5;
    let b = 10;
    let c = 50;
    
    for (let i = 0; i < input; i++) {
      let x = i + 1;
      let y = i + 2;
      let z = i + 3;
  
    }
    for (let j = 0; j < input; j++) {
      let p = j * 2;
      let q = j * 2;
    }
    let whoAmI = "I don't know";
  }

  // O(1) * 4
//   O(n) * 4 + O(n)*3
// Big O (4 + 7n) --> O(n) or linear time

// O(n^2) --> quadratic time
// This happens when a loop is nested inside another loop