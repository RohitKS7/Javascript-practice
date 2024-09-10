const person = {
  firstName: "Gary",
  lastName: "Vee",
  car: {
    color: "red",
    wheels: 4,
  },
  animals: {
    dog: {
      name: "Fluffy",
      age: 3,
    },
    cat: {
      name: "Kitty",
      age: 5,
    },
  },
};

// log properties separatly
const { firstName, lastName, car, animals } = person;
const { color, wheels } = person.car;
const { dog, cat } = person.animals;

console.log(firstName, lastName);
console.log(car);
console.log(color);
console.log(wheels);
console.log(animals);
console.log(cat);
console.log(dog);
