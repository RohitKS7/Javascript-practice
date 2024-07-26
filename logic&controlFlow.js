// const age = 18;

// // ⁡⁢⁣⁢𝗜𝗙 𝗘𝗟𝗦𝗘 𝗰𝗼𝗱𝗶𝘁𝗶𝗼𝗻⁡
// if (age > 18) {
//   console.log("allwed to enter");
// } else {
//   console.log("not allowed");
// }

// ⁡⁢⁣⁢𝗧𝗥𝗨𝗧𝗛𝗬 & 𝗙𝗔𝗟𝗦𝗬 𝗩𝗮𝗹𝘂𝗲𝘀⁡
// It is must to understand 'Truthy' and 'Falsy' values in Javascript
// Truthy doesn't mean it is a true value. So to understand which value is falsy or truthy, just remember this 6 falsy values in JS bcoz everything other than these are truthy values
// Falsy Values in Javascript
/* 
⁡⁢⁣⁣1⁡. false
⁡⁢⁣⁣2⁡. 0 // zero is falsy and 1 is truthy
⁡⁢⁣⁣3⁡. '' // any empty string 
⁡⁢⁣⁣4⁡. null
⁡⁢⁣⁣5⁡. undefined
⁡⁢⁣⁣6⁡. NaN 
*/

// Examples

const dogs = 5;

if (dogs) {
  console.log(`You have ${dogs} dogs`);
} else {
  console.log("You have no dogs");
}

// ⁡⁣⁢⁣⁡⁢⁣⁢𝗨𝘀𝗶𝗻𝗴⁡ ⁡⁣⁢⁣𝗔𝗡𝗗⁡ ⁡⁢⁣⁢𝗹𝗼𝗴𝗶𝗰𝗮𝗹 𝗼𝗽𝗲𝗿𝗮𝘁𝗼𝗿⁡⁡
// AND operator only works when all values are true.
console.log("something" && 1 && "test" && 999); // 999 result
// it will run left to right then it will return the last true value if all values r true
console.log("something" && 0 && "test" && 999); // 0 result
// it will run until it encounters a falsy value that's '0' second value, Now it will return '0'

// ⁡⁢⁣⁢𝗨𝘀𝗶𝗻𝗴⁡ ⁡⁣⁢⁣𝗢𝗥⁡ ⁡⁢⁣⁢𝗹𝗼𝗴𝗶𝗰𝗮𝗹 𝗼𝗽𝗲𝗿𝗮𝘁𝗼𝗿⁡⁡
// 1./ Condition 1 when all values are True
console.log("something" || 1 || "test" || 999); // "something" result
// it'll return the first true value it encounters and doesn't care about other values even if they're true

//  2./ Condition 2 when all values are False
console.log("" || 0 || null || NaN); // NaN result
// If all values are false then it'll return the last value

//  3./ When some values r true
console.log("" || 0 || "test" || 999); // "test" result
