// 3. 𝗔𝗿𝗿𝗮𝘆 ⁡⁣⁢⁣𝗙𝗶𝗹𝘁𝗲𝗿⁡ - (immutable)
const employeesData = [
  { name: "Rohit", overtime: 5 },
  { name: "Kumar", overtime: 3 },
  { name: "Suman", overtime: 10 },
  { name: "Don", overtime: 12 },
];

// Reward the employees with 7 or more hours of overtime
const employeesToReward = employeesData.filter(
  (employee) => employee.overtime >= 7
);

console.log(employeesToReward);
const employeeName = employeesToReward.map((employee) => employee.name);
console.log(employeeName);

employeeName.forEach((employee) => console.log(`Reward for ${employee}`));

// 4. Array ⁡⁣⁢⁣𝗙𝗶𝗻𝗱⁡ - (immutable)
// The Find method for arrays returns the first value that satisfies the condition
const states = ["Bihar", "Karanatak", "Kerala", "U.P", "M.P"];
const specificState = states.find((state) => {
  return state.startsWith("K");
});
console.log(specificState);
