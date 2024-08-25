//  JavaScript differentiates Data Types on:

//  ⁡⁣⁢⁣𝗩𝗮𝗹𝘂𝗲 𝘁𝘆𝗽𝗲𝘀:⁡ Variables hold the actual value. Assigning or passing a value type copies the value itself.
//  - Value Types (Primitive types) ( Number, String, Boolean ....)

let a = 10;
let b = a;

a = 5;

console.log(a); // 5
console.log(b); // 10

//  ⁡⁣⁢⁣⁡⁣⁢⁣𝗥𝗲𝗳𝗲𝗿𝗲𝗻𝗰𝗲 𝘁𝘆𝗽𝗲𝘀:⁡⁡ Variables hold a reference to the data. Assigning or passing a reference type copies the reference, meaning changes to the data are reflected across all references.
//  - Reference Types (Complex types) ( Objects, Arrays)

let obj1 = { name: "Alice" };
let obj2 = obj1; // obj2 refers to the same object as obj1

obj2.name = "Bob"; // changing obj2 affects obj1

console.log(obj1.name); // 'Bob'
console.log(obj2.name); // 'Bob'
