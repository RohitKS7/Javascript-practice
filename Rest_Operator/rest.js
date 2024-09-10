// Rest Operator

// It is used when we don't know the exact number of arguments being passed to a function.
const add = (...args) => args.reduce((acc, val) => acc + val);

console.log(add(2, 22, 3, 5, 52, 26, 6, 6));

const example = (...numbers) => numbers;

console.log(example(2, 4, 56, 4, 6, 7, 2));
