// Empty set
const mySet = new Set();

// Set from array (duplicates removed automatically)
const numbers = new Set([1, 2, 2, 3, 3, 4]);
console.log(numbers); // Set {1, 2, 3, 4}

console.log(":************************Another Example**************************:");




const fruits = new Set();

// Add items
fruits.add("apple");
fruits.add("banana");
fruits.add("apple"); // This gets ignored - no duplicates!
// Check size
console.log(fruits.size); // 1

// Check if item exists
console.log(fruits.has("apple")); // true

// Remove item
fruits.delete("banana");

// Check size after removal
console.log(fruits.size); // 1

// See all items
console.log(fruits); // Set {"apple"}


console.log(":************************Another Example**************************:");


const a = new Set([1, 2, 3]);           // A Set containing: {1, 2, 3}
const b = new Map([                     // A Map with key-value pairs:
  ["first", "one"],                    //   key "first" → "one"
  ["second", "two"],                   //   key "second" → "two" 
  ["fourth", "four"],                  //   key "fourth" → "four"
]);

console.log(a.union(b)); // Set(4) {1, 2, 3, 4}
console.log(a.intersection(b)); // Set(2) {1, 2}
console.log(a.difference(b));
