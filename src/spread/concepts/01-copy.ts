const original = [1, 2, 3];
const copy = [...original]; // New Array

console.log(original);
//[ 1, 2, 3 ]

console.log(copy);
//[1, 2, 3];

const user = { fullname: "John Doe", age: 42 };
const userCopy = { ...user }; // New Object

console.log(user);
/*
{
  fullname: "John Doe",
  age: 42,
}
*/

console.log(userCopy);
/*
{
  fullname: "John Doe",
  age: 42,
}
*/
