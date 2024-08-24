const array = [1, 2, 3, 4, 5];

// Array Some -
// "Some" method checks is Atleast 1 element is greater then 3, return boolean.
console.log(array.some((number) => number > 3)); // True

// Array Every -
// 'Every' method checks is every elements in an array is greater than 3
console.log(array.every((number) => number > 3)); // false
