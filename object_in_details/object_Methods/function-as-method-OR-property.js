// Object Methods:
// Method is another property of an object which is a function.

// 3 ways to declare function/method in object as property.
const myObj = {
  myMethod: () => {}, // 1st way
  myMethod2: function () {}, // 2 way
  myMethod3() {}, // 3 way
};

// Example -
const dog = {
  name: "Fluffy",
  age: 2,
  bark: () => {
    console.log("Woof Woof");
  },
};

// Normal Calling of method
dog.bark();

// A method to call all the properties of an single object.
// By using 'this' keyword, and as we know we can't use 'this' keyword in an arrow function, so we would be using normal function
const doggie = {
  name: "Fluffy",
  age: 2,
  listAllProperties: function () {
    //  "this" keyword
    console.log(this.name, this.age);
  },
};

// Normal Calling of method
doggie.listAllProperties();
