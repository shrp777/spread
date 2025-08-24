const user = {
  firstname: "John",
  lastname: "Doe",
  age: 42,
  email: "john@doe.com"
};

//update one property
const updatedUser = { ...user, age: 43 };
console.log(updatedUser);
/*
{
    firstname: "John",
    lastname: "Doe",
    age: 43,
    email: "john@doe.com",
}
*/

//update multiple properties
const updatedUser2 = { ...user, age: 44, email: "john.doe@shrp.dev" };
console.log(updatedUser2);
/*
{
  firstname: "John",
  lastname: "Doe",
  age: 44,
  email: "john.doe@shrp.dev",
}
*/
