const sum = (...args: Array<number>) => args.reduce((acc, curr) => acc + curr);

const numbers: Array<number> = [1, 2, 3];

const result = sum(...numbers);

console.log(result);
//6
