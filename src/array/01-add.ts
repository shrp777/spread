const items = ["A", "B", "C"];

// Add item to the end
const itemsWithNewEnd = [...items, "D"];

console.log(itemsWithNewEnd);
//["A", "B", "C", "D"]

// Add item to the start
const itemsWithNewStart = ["Z", ...items];

console.log(itemsWithNewStart);
// ["Z", "A", "B", "C"]

// Add many new items
const itemsWithManyNewItems = [...items, "D", "E", "F"];

console.log(itemsWithManyNewItems);
//["A", "B", "C", "D", "E", "F"]

// New item at specific position
const index = 2;
const itemsWithTheNewItemInserted = [
  ...items.slice(0, index),
  "New Item",
  ...items.slice(index)
];
// Résultat : ["A", "B", "New Item", "C"]
