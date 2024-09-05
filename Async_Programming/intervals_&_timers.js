// setInterval
const myInterval = setInterval(() => {
  console.log("Hello, Rohit");
}, 1000);

// clearInterval
clearInterval(myInterval);

// setTimeout
const myTimeout = setTimeout(() => {
  console.log("Hello Rohit, At the top");
}, 1000);

console.log("At the bottom");
// clearTimeout
// clearTimeout(myTimeout);
