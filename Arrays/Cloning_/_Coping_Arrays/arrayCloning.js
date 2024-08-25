// Since Array is a Reference Type, cloning it might seem hard.
// But it's pretty simple with this Method.

// 1. Spread Operator:-> This operator 'spreads the value of string, array and object individually. Cloning with this method also known as 'Shallow Clone'.

const numbers = [1, 2, 3, 4, 7, 6]; // #123frf (example referenceID)
console.log(...numbers); // 1 2 3 4 7 6

const copiedNumbers = numbers; // #123frf (example referenceID)

// numbers and copiedNumbers are both refering to the same place/reference in the memory. Where 'newNumbers' has it's own new referenceID. So, any changes to "newNumbers" will not change the actual 'numbers' array or 'copiedNumbers'

const newNumbers = [...numbers, 7, 8, 9];

numbers.push(3);

console.log(numbers); // [1, 2, 3, 4, 7, 6, 3]]
console.log(copiedNumbers); // [1, 2, 3, 4, 7, 6, 3]
console.log(newNumbers); // [1, 2, 3, 4, 7, 6, 7, 8, 9]

// 2. Array.slice() method :->  Copies the part of array and puts them into new array. If not given any parameters then it will copy the whole array

const slicedNumbersArray = numbers.slice(2, 5); // partial Array cloning
console.log(slicedNumbersArray); //[3, 4, 7]
const slicedNumbersArray2 = numbers.slice(); // complete Array cloning
console.log(slicedNumbersArray2); // [1, 2, 3, 4, 7, 6, 3]
