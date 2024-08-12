// ⁡⁣⁢⁣𝗔𝗿𝗿𝗮𝘆 𝗥𝗲𝗱𝘂𝗰𝗲⁡

// Example Task -> // we want to know the total price of all the items in an array.

const groceryList = [34, 13, 25, 79, 109, 145];

// 𝗠𝗲𝘁𝗵𝗼𝗱 𝟭 = By using 'forEach'
// where we have to keep track of one external variable.

let totalPrice = 0;

groceryList.forEach((price) => {
  totalPrice += price;
});
console.log(totalPrice);

// 𝗠𝗲𝘁𝗵𝗼𝗱 𝟮 = By using 'Reduce' we eliminate the use of an external variable

// '0' here is the initialValue of "accumulator"
const total = groceryList.reduce((accumulator, currentValue, i) => {
  console.log(`value of accumulator in loop ${i + 1} is ${accumulator}`);
  console.log(`currentValue ${currentValue}`);
  console.log(
    `totalPrice after loop ${i + 1} is ${accumulator + currentValue}`
  );
  return accumulator + currentValue;
}, 0);

console.log(total);
