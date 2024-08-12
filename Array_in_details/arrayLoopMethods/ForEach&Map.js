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
