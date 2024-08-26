// In Nested Objects and Arrays every object or array holds their own referenceID. So when we use shallow cloning methods it only removes the referenceId for outer Object or Array and not for the nested ones. and When we make any change to it. It will change the actual object's or array's data too.

/* const person = { 
    referenceID of person object 
    {
        referenceId of Car Object
    }
} */

// example
const person = {
  name: "Rohit",
  car: {
    brand: "BMW",
    color: "Pink",
  },
};

// 1. With shallow cloning it takes more efforts and time. For Example-
const otherPerson = { ...person, car: { ...person.car } };

otherPerson.name = "Kumar";
otherPerson.car.color = "Black";

console.log(person);
console.log(otherPerson);

// 2. With Deep Cloning Method - 'JSON Method'

const anotherPerson = JSON.parse(JSON.stringify(person));

anotherPerson.name = "Suman";
anotherPerson.car.color = "White";
console.log(anotherPerson);
