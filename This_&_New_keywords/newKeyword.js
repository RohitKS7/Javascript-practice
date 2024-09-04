// The '𝘯𝘦𝘸' Keyword

// 'new' Keyword, creates a new object.

// ⁡⁢⁣⁢𝗡𝗢𝗧𝗘⁡ => ⁡⁣⁣⁢"EVERYTHING IS JAVASCRIPT IS AN OBJECT"⁡

// Example 1 - A literal Array declaration
const arr = [1, 2, 3, 4]; // literal or short-hand of creating new array

const arr1 = new Array(1, 2, 3, 4);

console.log(arr, arr1);

// Example 2 - A literal Ojbect declaration
const obj = {};
const obj1 = new Object();

console.log(obj, obj1);

// What the difference?

// There's no difference in creating an object using literal method or 'new' keyword method. They both gives us different type of propeties or method to manipulate the object.

// We can even manipulate number type using object method -
const number = new Number(100.78);
console.log(number.toFixed(0)); // it removes the decimal values and makes a round number.

// 'new' Keyword is usefull where we don't have a lietral syntax for a object.

// For instance "DATE" object doesn't have any type of lietral syntax.

const myDate = new Date();

console.log(myDate);
