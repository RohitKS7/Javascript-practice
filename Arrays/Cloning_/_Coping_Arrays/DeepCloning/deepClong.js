// In Nested Objects and Arrays every object or array holds their own referenceID. So when we use shallow cloning methods it only removes the referenceId for outer Object or Array and not for the nested ones. and When we make any change to it. It will change the actual object's or array's data too.

//  const exampleData = [ refID_1, refID_2, refID_3]

const data = [
  ["Rohit", "Don", "Kumar"],
  [3, 6, 9],
  ["Gold", "Silver", "Bronze"],
];

// 1. With shallow cloning it takes more efforts and time. For Example-
const moreData = [...data];
moreData[2].unshift("Platanium");

//  2. Deep Cloning Method - 'JSON Method'
const parseData = JSON.parse(JSON.stringify(data));
parseData[1].unshift(9, 4, 2, 5, 2, 3);

console.log(data);
console.log(moreData);
console.log(parseData);
