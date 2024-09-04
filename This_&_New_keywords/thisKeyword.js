//  <!-- Nowadays Javascript is becoming more "Function Oriented Language" instead of "Object Oriented" (Ob.Or.),  So that's why 'this' keyword is not in use except some execption -->

const person = {
  name: "rohit",
  age: "24",
  keys() {
    this.name, this.age;
  },
};

const key = person.keys();

console.log(key);
