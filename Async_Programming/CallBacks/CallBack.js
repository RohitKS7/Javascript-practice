// CallBacks Function is used for Async programming in JavaScript (this is the old method for async programming in JS).

// A callback function in JavaScript is a Function that is passed as an argument to another function and is executed after some kind of event or operation has occurred.

// Define a function that accepts a callback function as a parameter
const processUserInput = (callback) => {
  console.log("Fetching...");

  setTimeout(() => {
    const userInput = "JavaScript is lit";
    // Call the callback function and pass the user input to it
    callback(userInput);
  }, 2000);
};

// Define a callback function
const displayMessage = (message) => console.log("The message is:", message);

// Call the processUserInput function and pass the displayMessage function as an argument to it
processUserInput(displayMessage);
