// // Since Object is a Reference Type, cloning it might seem hard.
// But it's pretty simple with this Method.
// ⁡⁢⁣⁢Cloning with this methods are also known as 'Shallow Clone'.⁡

// 1. Spread Operator:-> This operator 'spreads the value of string, array and object individually.

const person = {
  name: "Jon",
  age: 30,
};

const otherPerson = { ...person };

person.age = 22;

console.log(person); // {name: 'Jon', age: 22}
console.log(otherPerson); // {name: 'Jon', age: 30}

//  2. Object.assign() :-> Takes 2 params, (Target Oject where to paste the copied properties, Object from which properties needs to be copied)
const obj = {
  male: "gender",
};
const secondPerson = Object.assign(obj, person);
const otherPerson2 = Object.assign({}, person);

console.log(secondPerson); // {male: 'gender', name: 'Jon', age: 22}
console.log(otherPerson2); // {name: 'Jon', age: 22}
