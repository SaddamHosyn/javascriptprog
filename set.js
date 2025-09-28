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



const mySet13 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const mySet14 = new Set([1, 2, 3, 4, 5]);

// intersect can be simulated via
const intersection = new Set([...mySet13].filter((x) => mySet14.has(x)));
console.log("Intersection:" + [...intersection]); // [1,2,3,4,5]


// difference can be simulated via
const difference = new Set([...mySet13].filter((x) => !mySet14.has(x)));
console.log("Difference:" + [...difference]); // [6,7,8,9,10]


console.log(":********************Functions**********************************:");



// Then create some Sets to test with
const bigSet = new Set([1, 2, 3, 4, 5, 6]);
const smallSet = new Set([2, 3, 4]);
const differentSet = new Set([7, 8, 9]);

// Now call the function
console.log(isSuperset(bigSet, smallSet)); // true - bigSet contains all elements of smallSet
console.log(isSuperset(bigSet, differentSet)); // false - bigSet doesn't contain 7, 8, 9
console.log(isSuperset(smallSet, bigSet)); // false - smallSet doesn't contain all elements of bigSet


function isSuperset(set, subset) {
  for (const elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}


console.log(":********************Set Relation Array**********************************:");



const myArray = ["value1", "value2", "value3"];

// Use the regular Set constructor to transform an Array into a Set
const mySet105 = new Set(myArray);

mySet105.has("value1"); // returns true
console.log(mySet105.has("value1")); // returns true
// below line show exactly converting Array to Set. Use the spread syntax to transform a set into an Array.
console.log([...mySet105]); // Will show you exactly the same Array as myArray



// Use Set to remove duplicate elements from an array
const numbers10 = [2, 13, 4, 4, 2, 13, 13, 4, 4, 5, 5, 6, 6, 7, 5, 32, 13, 4, 5];

console.log([...new Set(numbers10)]); // [2, 13, 4, 5, 6, 7, 32]

console.log(":********************Set Relation with Strings**********************************:");
// Case sensitive (set will contain "F" and "f")
console.log(new Set("Firefox")); // Set(7) [ "F", "i", "r", "e", "f", "o", "x" ]

// Duplicate omission ("f" occurs twice in the string but set will contain only one)
console.log(new Set("firefox")); // Set(6) [ "f", "i", "r", "e", "o", "x" ]

console.log(":********************Set Relation with DOM Elements**********************************:");

