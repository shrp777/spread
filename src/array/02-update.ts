const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 }
];

// Update one item by index
const index = 1;
const updatedByIndex = users.map((user, i) =>
  i === index ? { ...user, age: 31 } : user
);

console.log(updatedByIndex);

/*
[
  {
    id: 1,
    name: "Alice",
    age: 25,
  }, {
    id: 2,
    name: "Bob",
    age: 31,
  }
]
*/

// Update one item's property
const updatedById = users.map((user) =>
  user.id === 2 ? { ...user, name: "John" } : user
);

console.log(updatedById);

/*
[
  {
    id: 1,
    name: "Alice",
    age: 25,
  }, {
    id: 2,
    name: "John",
    age: 30,
  }
]
*/

// Update all items
const incrementAges = users.map((user) => ({ ...user, age: user.age + 1 }));

console.log(incrementAges);

/*
[
  {
    id: 1,
    name: "Alice",
    age: 26,
  }, {
    id: 2,
    name: "Bob",
    age: 31,
  }
]
*/
