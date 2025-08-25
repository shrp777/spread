const original = { name: "John Doe", address: { city: "Nancy" } };
const copy = { ...original };
copy.address.city = "Paris"; //original is updated !!!

console.log(copy);

console.log(original);

//deep copy
const deepCopy = {
  ...original,
  address: { ...original.address, city: "Paris" }
};
