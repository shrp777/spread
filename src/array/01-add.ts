const items = ["A", "B", "C"];

// Add item to the end
const itemsWithItemAtEnd = [...items, "D"];

console.log(itemsWithItemAtEnd);
//["A", "B", "C", "D"]

// Add item to the start
const itemsWithItemAtStart = ["Z", ...items];

console.log(itemsWithItemAtStart);
//["Z", "A", "B", "C"]

// Add many new items at start
const itemsWithManyNewItemsAtStart = [...items, "D", "E", "F"];

console.log(itemsWithManyNewItemsAtStart);
//["A", "B", "C", "D", "E", "F"]

// Add many new items at start
const itemsWithManyNewItemsAtEnd = ["D", "E", "F", ...items];

console.log(itemsWithManyNewItemsAtEnd);
//["D", "E", "F", "A", "B", "C"];

// Add new item at specific position
const index = 2;
const itemsWithNewItemInsertedAtSpecificPosition = [
  ...items.slice(0, index),
  "New Item",
  ...items.slice(index)
];
console.log(itemsWithNewItemInsertedAtSpecificPosition);
//[ "A", "B", "New Item", "C" ]
