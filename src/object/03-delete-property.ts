const user = { firstname: "John", age: 42, email: "john@doe.com" };

// delete destructuring
const { email, ...userWithoutEmail } = user;

console.log(userWithoutEmail);
/*
{
  firstname: "John",
  age: 42,
}
*/
