// ⁡⁢⁣⁢𝗔𝗥𝗥𝗔𝗬 Adding and Removing 𝗠𝗘𝗧𝗛𝗢𝗗𝗦⁡
const names = ["Jon", "Bob", "David", "Mark"];

// 𝟭. 𝗔𝗿𝗿𝗮𝘆 𝗣𝘂𝘀𝗵 - Adds a new element at the end of the array
names.push("Rohit"); // Returns the length of array
console.log(names);

// 𝟮. 𝗔𝗿𝗿𝗮𝘆 𝗣𝗼𝗽 - It only Deletes last element from the array, it can't delete a specified element.
const deletedValue = names.pop(); // returns the deleted value as a result
console.log(deletedValue);
console.log(names); // Returns Changed Array

// 𝟯. 𝗔𝗿𝗿𝗮𝘆 𝗨𝗻𝘀𝗵𝗶𝗳𝘁 - Adds a new element to the start of an array
names.unshift("Rohit"); // returns the length of array
console.log(names);

// 𝟰. 𝗔𝗿𝗿𝗮𝘆 𝗦𝗵𝗶𝗳𝘁 - Deletes the first element of an array
names.shift(); // returns the deleted value as a result
console.log(names);

//  𝟱. 𝗔𝗿𝗿𝗮𝘆 𝗦𝗽𝗹𝗶𝗰𝗲
const resultValue = names.splice(1, 1);
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// @param start — The zero-based location in the array from which to start removing elements.

// @param deleteCount — The number of elements to remove.

// @returns — An array containing the elements that were deleted.
console.log(resultValue);

// This is an example use case of deleting and adding elements simultaneously
const splicedValue = names.splice(2, 1, "Rohit", "Kumar", "Suman"); // Start at index 2, delete 1 element and then add the new element there
console.log(splicedValue);
console.log(names);

//  𝟲. 𝗔𝗿𝗿𝗮𝘆 𝗦𝗹𝗶𝗰𝗲 - To Copy some of the array elements and create a new array of those elements
const slicedArray = names.slice(2); // start the copying from index 1 to specified index number or default-last element
console.log(slicedArray);
console.log(slicedArray.join(" "));
