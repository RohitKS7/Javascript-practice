// Synchronous JS example

/*
const functionOne = () => {
  console.log("Function One");

  functionTwo();

  console.log("Function One, Part 2");
};

const functionTwo = () => {
  console.log("Function Two");
};

functionOne();
*/

// Asynchronous JS example
const functionOne = () => {
  console.log("Function One");

  functionTwo();

  console.log("Function One, Part 2");
};

const functionTwo = () => {
  setTimeout(() => console.log("Function Two"), 2000);
};

functionOne();
