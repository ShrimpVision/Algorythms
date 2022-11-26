const strings = ['a', 'b', 'c', 'd'];

// push - add at the end
strings.push('e'); // O(1)

// pop - remove last
strings.pop();  // O(1)

// unshift - add to start
strings.unshift('x');  // O(n)

// splice - add at index
strings.splice(2, 0, 'alien'); // O(n)

console.log(strings);

