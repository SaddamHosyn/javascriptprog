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


console.log(":************************Another Example**************************:");

/*
const realSet = new Set([1, 2, 3]);           // This MUST be a real Set
const mapObject = new Map([[4, "four"]]);     // This can be "set-like"

realSet.union(mapObject); // ✓ Works! Real Set calling method on set-like object
mapObject.union(realSet); // ✗ Error! Map doesn't have union() method
 */

console.log(":************************Another Example**************************:");


const mySet1 = new Set([1, 2, 3]);
console.log(mySet1.constructor); // Shows: function Set() { [native code] }
console.log(mySet1.constructor === Set); // true

console.log(":************************Another Example**************************:");

const mySet15 = new Set([1, 2, 3]);
console.log(Object.prototype.toString.call(mySet15)); // "[object Set]"
console.log(mySet15.toString()); // "[object Set]"

console.log(":************************Another Example**************************:");


const mySet12 = new Set([1, 2, 3]);

console.log(mySet12.add(4));        // Add item: Set {1, 2, 3, 4}
console.log(mySet12.has(2));        // Check if exists: true
console.log(mySet12.delete(1));     // Remove item: Set {2, 3, 4}, and returns true to show its success
console.log(mySet12.clear());       // Remove everything: Set {} , and returns undefined

console.log(":************************Another Example**************************:");

// discomfort will be true if sets have no elements in common
// i.e. they are disjoint
const cats = new Set(["Fluffy", "Whiskers"]);
const dogs = new Set(["Buddy", "Max"]);

console.log(cats.isDisjointFrom(dogs)); // true - no overlap
console.log(cats.isDisjointFrom(new Set(["Buddy"]))); // true
console.log(cats.isDisjointFrom(new Set(["Fluffy"]))); // false

console.log(":************************Another Example**************************:");


const fruits180 = new Set(["apple", "banana"]);
const allFood = new Set(["apple", "pizza", "banana", "cake"]);

console.log(fruits180.isSubsetOf(allFood)); // true - all fruits are in allFood


console.log(":************************Another Example**************************:");

const allFood12 = new Set(["apple", "banana", "pizza", "cake"]);
const fruits54 = new Set(["apple"]);

console.log(allFood12.isSupersetOf(fruits54)); // true - allFood contains all fruits


console.log(":************************Another Example**************************:");


const colors = new Set(["red", "blue", "green"]);

for (const value of colors.values()) {
    console.log(value); // red, blue, green
}


for (const keys of colors.keys()) {
    console.log(keys); // red, blue, green
}

console.log(":************************Another Example**************************:");


const setA = new Set([1, 2, 3, , 4]);
const setB = new Set([3, 4, 5]);

const unique = setA.symmetricDifference(setB);
console.log(unique); // Set {1, 2, 4, 5}
// Items that are unique to each set


console.log(":************************Another Example**************************:");

const boys = new Set(["Tom", "Jack", "Alice"]);
const girls = new Set(["Alice", "Sarah"]);

const everyone = boys.union(girls);
console.log(everyone); // Set {"Tom", "Jack", "Alice", "Sarah"}


console.log(":************************Another Example**************************:");
 

const mySet10 = new Set([1, 2, 3, 4]);
const o = { a: 1, b: 2 };
mySet10.add(o);

mySet10.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay
console.log(mySet10); // Set { { a: 1, b: 2 }, { a: 1, b: 2 } }

console.log(":************************Another Example**************************:");


const mySet11 = new Set([1, 2, 3, 4]);
for (const item of mySet11) {
  console.log(item);
}

for (const item of mySet11.keys()) {
  console.log("keys:" + item);
}

for (const item of mySet11.values()) {
  console.log("Values:" + item);
}


for (const [key, value] of mySet11.entries()) {
  console.log(key);
}

console.log("entries:" + (myArr = Array.from(mySet11)));



console.log(mySet11.size); // 4
console.log([...mySet11]); // [1, 2, 3, 4] copy to array




const mySet14 = new Set([1, 2, 3, 4, 5]);

// intersect can be simulated via
const intersection = new Set([...mySet11].filter((x) => mySet14.has(x)));
console.log("Intersection:" + [...intersection]); // [3,4]
