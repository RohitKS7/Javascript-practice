// // ⁡⁢⁣⁢𝗔𝗥𝗥𝗔𝗬 𝗠𝗘𝗧𝗛𝗢𝗗𝗦⁡
// const names = ["Jon", "Bob", "David", "Mark"];

// // 𝟭. 𝗔𝗿𝗿𝗮𝘆 𝗣𝘂𝘀𝗵 - Adds a new element at the end of the array
// names.push("Rohit"); // Returns the length of array
// console.log(names);

// // 𝟮. 𝗔𝗿𝗿𝗮𝘆 𝗣𝗼𝗽 - It only Deletes last element from the array, it can't delete a specified element.
// const deletedValue = names.pop(); // returns the deleted value as a result
// console.log(deletedValue);
// console.log(names); // Returns Changed Array

// // 𝟯. 𝗔𝗿𝗿𝗮𝘆 𝗨𝗻𝘀𝗵𝗶𝗳𝘁 - Adds a new element to the start of an array
// names.unshift("Rohit"); // returns the length of array
// console.log(names);

// // 𝟰. 𝗔𝗿𝗿𝗮𝘆 𝗦𝗵𝗶𝗳𝘁 - Deletes the first element of an array
// names.shift(); // returns the deleted value as a result
// console.log(names);

// //  𝟱. 𝗔𝗿𝗿𝗮𝘆 𝗦𝗽𝗹𝗶𝗰𝗲
// const resultValue = names.splice(1, 1);
// // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// // @param start — The zero-based location in the array from which to start removing elements.

// // @param deleteCount — The number of elements to remove.

// // @returns — An array containing the elements that were deleted.
// console.log(resultValue);

// // This is an example use case of deleting and adding elements simultaneously
// const splicedValue = names.splice(2, 1, "Rohit", "Kumar", "Suman"); // Start at index 2, delete 1 element and then add the new element there
// console.log(splicedValue);
// console.log(names);

// //  𝟲. 𝗔𝗿𝗿𝗮𝘆 𝗦𝗹𝗶𝗰𝗲 - To Copy some of the array elements and create a new array of those elements
// const slicedArray = names.slice(2); // start the copying from index 1 to specified index number or default-last element
// console.log(slicedArray);
// console.log(slicedArray.join(" "));

// ⁡⁢⁣⁢𝗔𝗿𝗿𝗮𝘆 𝗟𝗼𝗼𝗽 𝗠𝗲𝘁𝗵𝗼𝗱𝘀⁡

// ### ⁡⁢⁢⁢𝗦𝘂𝗺𝗺𝗮𝗿𝘆⁡

// - Use **`forEach`** when you need to perform an operation on each element of the array but do not need to return a new array (e.g., logging, modifying elements in place).
// - Use **`map`** when you need to transform each element of the array and return a new array with the transformed elements (e.g., applying a function to each element to create a new array).

// Both methods can be useful depending on the context of what you are trying to achieve.

// 𝟭. 𝗔𝗿𝗿𝗮𝘆 ⁡⁣⁢⁣𝗙𝗼𝗿𝗘𝗮𝗰𝗵⁡ - (mutable)
const cities = ["Mumbai", "Mathura", "Delhi", "New York", "Kolkata", "Agra"];

// ForEach method always returns undefined as it's return value.
const returnValue = cities.forEach((city, i) => console.log(city, i));
console.log(returnValue); // undefined

// ### ⁡⁢⁣⁣𝗔𝗿𝗿𝗮𝘆.𝗳𝗼𝗿𝗘𝗮𝗰𝗵⁡

// 1. **Purpose**: `forEach` is used to execute a provided function once for each array element. It is primarily used for performing side effects, such as updating each element, logging, or interacting with external systems.
// 2. **Return Value**: It does not return a new array. Instead, it returns `undefined`.
// 3. **Mutation**: It can mutate the original array if the provided function modifies the elements.
// 4. **Typical Use Case**: Use `forEach` when you need to perform an operation on each element of the array and do not need to store or return the results.

// Use When -
//  You want to do something with each of the array elements
// Don't use When -
//  You want to stop or break the loop when some condition is true. (basically don't use it when you don't wanna do something with each and every element)
//  Promises won't work in "forEach", So don't use it in async code

// Example -
let sum = 0;
const numbers = [67, 83, 2, 45];

numbers.forEach((number) => {
  sum += number;
});

console.log(sum);

// 𝟮. 𝗔𝗿𝗿𝗮𝘆 ⁡⁣⁢⁣𝗠𝗮𝗽⁡ - (immutable)
const inventory = [
  {
    price: 5,
    name: "eggs",
  },
  {
    price: 7,
    name: "milk",
  },
  {
    price: 10,
    name: "patoto",
  },
  {
    price: 28,
    name: "tamato",
  },
  {
    price: 36,
    name: "Dal",
  },
];

const prices = inventory.map((item) => item.price);
console.log(prices);

// ### ⁡⁢⁣⁣𝗔𝗿𝗿𝗮𝘆.𝗺𝗮𝗽⁡

// 1. **Purpose**: `map` is used to create a new array by applying a provided function to each element of the original array. It is primarily used for transforming data.
// 2. **Return Value**: It returns a new array with the results of applying the provided function to each element.
// 3. **Mutation**: It does not mutate the original array; it creates and returns a new array.
// 4. **Typical Use Case**: Use `map` when you need to transform each element of an array and get a new array with the transformed elements.

// 3. 𝗔𝗿𝗿𝗮𝘆 ⁡⁣⁢⁣𝗙𝗶𝗹𝘁𝗲𝗿⁡ - (immutable)
const employeesData = [
  { name: "Rohit", overtime: 5 },
  { name: "Kumar", overtime: 3 },
  { name: "Suman", overtime: 10 },
  { name: "Don", overtime: 12 },
];

// Reward the employees with 7 or more hours of overtime
const employeesToReward = employeesData.filter(
  (employee) => employee.overtime >= 7
);

console.log(employeesToReward);
const employeeName = employeesToReward.map((employee) => employee.name);
console.log(employeeName);

employeeName.forEach((employee) => console.log(`Reward for ${employee}`));

// 4. Array ⁡⁣⁢⁣𝗙𝗶𝗻𝗱⁡ - (immutable)
// The Find method for arrays returns the first value that satisfies the condition
const states = ["Bihar", "Karanatak", "Kerala", "U.P", "M.P"];
const specificState = states.find((state) => {
  return state.startsWith("K");
});
console.log(specificState);
