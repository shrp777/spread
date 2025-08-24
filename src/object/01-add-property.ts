const user = { firstname: "John", lastname: "Doe", age: 42 };

const newUser = { ...user, email: "john@doe.com" };

console.log(newUser);
/*
{
  firstname: "John",
  lastname: "Doe",
  age: 42,
  email: "john@doe.com",
}
*/
