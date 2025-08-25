//without types for better readability
// function bar(first, ...rest) {
//   console.log("first : ", first);
//   console.log("rest : ", rest);
// }

//with types
function foo(first: any, ...rest: Array<any>): void {
  console.log("first : ", first);
  console.log("rest : ", rest);
}

foo(1, 2, 3, 4);
// first : 1
// rest : [2, 3, 4]
