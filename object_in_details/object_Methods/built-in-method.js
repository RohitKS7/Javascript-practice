// ⁡⁣⁣⁢Built-In Object Methods⁡

// ⁡⁣⁢⁣𝟭⁡. Object.keys()  => creates an array containing the keys of an object.

// Get all the positions in an company
const company = {
  CEO: "Rohit",
  CFO: "Kumar",
  PR: "Suman",
  HR: "Don",
};

const positions = Object.keys(company);

console.log(positions);

// ⁡⁣⁢⁣𝟮⁡. Object.values  => creates an array containing the values of an object.

const employees = Object.values(company);

console.log(employees);

//  ⁡⁣⁢⁣𝟯⁡. Object.entries  => creates a nested array of the key/value pairs of an object.

const positionsAndEmployees = Object.entries(company);

console.log(positionsAndEmployees);
/* 
  
  (4) [Array(2), Array(2), Array(2), Array(2)]
  0: (2) ['CEO', 'Rohit']
  1: (2) ['CFO', 'Kumar']
  2: (2) ['PR', 'Suman']
  3: (2) ['HR', 'Don']
  
  
  */

// Loop through the results
positionsAndEmployees.forEach((item) => {
  let key = item[0];
  let value = item[1];

  console.log(`${key}: ${value}`);
});

// ⁡⁣⁢⁣𝟰⁡. Object.freeze() -> prevents modification to properties and values of an object. (can't add, remove or modify )

const user = {
  username: "Rohit",
  password: "134553",
};

// Prevent changing of username
const admin = Object.freeze(user);

admin.username = "kumar";
console.log(admin); // nothing changed in user object.

// ⁡⁣⁢⁣𝟱⁡. Object.seal() -> prevents new properties from being added to an object, but allows the modification of existing properties.

const user2 = {
  username: "Kumar",
  password: "134553",
};
const admin2 = Object.seal(user2);

admin2.password = "098009";
console.log(admin2);
