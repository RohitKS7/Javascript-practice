//  The ⁡⁢⁣⁢𝗪𝗵𝗶𝗹𝗲⁡ Loop
//  "While" loop runs until the condition is true

let i = 0;

while (i <= 10) {
  console.log(i);
  i++;
}

//  The ⁡⁢⁣⁢𝗙𝗼𝗿⁡ Loop
// "For" loop runs for a specific number of times.

/* 
for([initialization]; [condtion]; [final-expression]){

}
*/
// 1. Initialization: Only executes one time at the beginning before the loop starts
// 2. Condition: the condition will be evaluted at each loop iteration until it becomes 'false'
// 3. Final-expression: this will execute at the last of every loop iteration, prior to the next condition check, and it's usually used to increment or decrement the loop counter

for (let i = 0; i < 7; i++) {
  console.log(i);
}
