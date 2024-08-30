// 𝗔𝗿𝗿𝗮𝘆 ⁡⁣⁢⁣𝗜𝗻𝗰𝗹𝘂𝗱𝗲𝘀⁡ - (Returns 'True' or 'False')

// Array Includes checks if a certain element is included in an array or not.

// Array Includes is case sensitive.

// Examples -
const array1 = [1, 2, 3];
console.log(array1.includes(2)); // true

const pets = ["cat", "dog", "bird"];
console.log(pets.includes("cat"));

const bookShelf = ["Moby Dick", "The Great Gatsby", "Pride and Prejudice"];

if (bookShelf.includes("Moby Dick") === false) {
  console.log("We have that book");
} else {
  console.log("Cannot find the book");
}
