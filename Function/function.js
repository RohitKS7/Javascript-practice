// If we didn't pass any arguments, we'd get 'undefined' as a result instead we could show the default values for parameters

const person = (name = "John Doe", age = 0) => {
  console.log(`${name} is ${age} years ${age < 50 ? "Young" : "Old"}`);
};

person("Joe", 5);

// when we try to add a number with undefined we'd get 'NaN'

const c = 2;

const add = (a = 0, b = 0) => {
  return a + b + c; // 2
};

const result = add(2);

console.log(result);
