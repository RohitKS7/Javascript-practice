/* ⁡⁢⁣⁢𝗜𝗻𝘁𝗿𝗼 𝘁𝗼 𝗩𝗮𝗿𝗶𝗮𝗯𝗹𝗲𝘀⁡
   name is "⁡⁣⁣⁢Identifier⁡".
   Identifier's first letter should not start with any other charaters than this ones ⁡⁢⁣⁣"_"(underscore)⁡, ⁡⁢⁣⁣"$"(dollar)⁡, and ⁡⁢⁣⁣"letter"⁡.
   Reserved Javascript Keys are not allowed as Identifiers such as ⁡⁢⁣⁣"var"⁡, ⁡⁢⁣⁣"𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻"⁡, ⁡⁢⁣⁣"async"⁡ etc.
   Same Identifiers are not allowed */

const name = "John";

console.log("name");

// ⁡⁢⁣⁢𝗗𝗮𝘁𝗮 𝗧𝘆𝗽𝗲𝘀 𝗮𝗹𝗹𝗼𝘄𝗲s us 𝘁𝗼 𝘀𝘁𝗼𝗿𝗲 data 𝗶𝗻 𝗩𝗮𝗿𝗶𝗮𝗯𝗹𝗲𝘀⁡

const string = "I'm John String"; // String is just a TEXT inside qoute
const backticks = `I'm also ${string}`; // backticks are used to make dynamic data
const age = 7; // Number
const boolean = true; // Boolean is either "True" or "False"
// ⁡⁢⁣⁣The Type of null is object⁡, which is a ⁡⁢⁣⁣bug in Javascript⁡ but since this type is primitive and many projects depend on it. Javascript community left it as a part of official JS.
const $null = null; // null is not allowed as identifier, so using $
let undefine;
const person = {
  id: 1,
  name: string,
  age: age,
};

console.log(typeof string + string);
console.log(typeof backticks + backticks);
console.log(typeof age + age);
console.log(typeof boolean + boolean);
console.log(typeof $null + $null);
console.log(typeof undefine + undefine);
console.log(person);
console.log(person.name + person.age);
