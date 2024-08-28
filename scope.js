/* 
1. ⁡⁣⁣⁢Global Scope⁡ ⁡⁢⁣⁢=>⁡ Variables declared outside of the function have Global Scope and accessable across all the code. Variables declared in Global Scope remains in the memory which can result in "out of memory" like problem.
2. ⁡⁣⁣⁢Local or Function Scope⁡ ⁡⁢⁣⁢=>⁡ Variables declared inside of the function have Local or Function Scope and only accessable inside that function. Variables declared in Local Scope gets deleted from the memory as soon as the function is executed.
3. ⁡⁣⁣⁢Block level Scope⁡ ⁡⁢⁣⁢=>⁡ Variable "Const" or "Let" have Block level scope means they are accessable only in the block of code where they're declared but it's not the case with "Var" variables (they're accessable from global scope). 
*/

// Block Level Scope example
if (true) {
  let name = "John";
  const age = 17;
  var gender = "Male";

  console.log(name, age, gender);
}

console.log(name); // will get nothing or error
console.log(gender); // male
