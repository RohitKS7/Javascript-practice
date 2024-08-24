// Array ⁡⁣⁢⁣𝗦𝗼𝗿𝘁⁡ - (mutable)

// Sort the ⁡⁢⁣⁣string⁡ in an array Alphabetically

// Words Examples -

const names = ["Anand", "Carry", "Bunny", "Don"];

const sortedNames = names.sort();

console.log(sortedNames); // the return value is also the mutated array we'll get from the below code.

console.log(names); // ['Anand', 'Bunny', 'Carry', 'Don']

// Numbers Examples -
const numbers = [1, 3, 44, 5, 29, 6, 71, 6, 9];

// We'll get this with default sort.
// console.log(numbers.sort()); // [1, 29, 3, 44, 5, 6, 6, 71, 9]

// After giving a Callback Function

// Ascending Order
numbers.sort((a, b) => a - b); // [1, 3, 5, 6, 6, 9, 29, 44, 71]
console.log(numbers);

// Decending Order
numbers.sort((a, b) => b - a); // [71, 44, 29, 9, 6, 6, 5, 3, 1]
console.log(numbers);
