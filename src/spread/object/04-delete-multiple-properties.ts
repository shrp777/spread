const user = {
  firstname: "John",
  lastname: "Doe",
  age: 42,
  email: "john@doe.com"
};

// Delete multiple properties
const { email, age, ...newUser } = user;

console.log(newUser);
/*
{
  firstname: "John",
  lastname: "Doe",
}
*/
