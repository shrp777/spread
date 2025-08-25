const user = {
  firstname: "John",
  lastname: "Doe",
  address: { city: "Nancy", country: "France" }
};

const updatedUser = {
  ...user,
  address: { ...user.address, city: "Paris" }
};

console.log(updatedUser);

/*
{
  firstname: "John",
  lastname: "Doe",
  address: {
    city: "Paris",
    country: "France",
  },
}
*/
