const person = {
  firstName: "Rohit",
};

// Adding data in object
person.dog = { name: "Fluffy", color: "Blue" };
person.age = 24;
person.friends = ["Kumar", "Suman"];

console.log(person);

// ⁡⁢⁣⁢𝗔𝗰𝗰𝗲𝘀𝘀𝗶𝗻𝗴 𝗼𝗯𝗷𝗲𝗰𝘁 𝗽𝗿𝗼𝗽𝗲𝗿𝘁𝗶𝗲𝘀⁡

// ⁡⁢⁣⁣Method 1⁡ = ⁡⁣⁢⁣'DOT NOTATION'⁡
console.log(person.friends[0]);
console.log(person.age);
console.log(person.dog.name);

// ⁡⁢⁣⁣Method 2⁡⁡ = ⁡⁣⁢⁣'SQUARE BRACKET NOTATION'⁡
console.log(person["firstName"]);
// additional features of this method 'dynamically getting properties'

const age = "age";
console.log(person[age]);
console.log(age);
