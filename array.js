
console.log(typeof Symbol("id")) // "symbol"

console.log(typeof Math) // "object"  (1)

console.log(typeof null) // "object"  (2)

console.log(typeof alert) // "function"  (3)


const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);


const myNumber = Math.random();
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number
console.log(myNumber);



let bigNumber = 1 / 0;
console.log(bigNumber); // Output: Infinity

let result = 10 * "apple";
console.log(result); // Output: NaN


console.log(globalThis.location); 





let cssWidth = "100px";
let cssOpacity = "0.8";

// We only want the number, not the "px" text.
let widthAsNumber = parseInt(cssWidth);
let opacityAsNumber = parseFloat(cssOpacity);

console.log(widthAsNumber);   // Output: 100
console.log(opacityAsNumber); // Output: 0.8





let unsafeQuery = "what is javascript?";

// Make it safe for a URL
let safeQuery = encodeURIComponent(unsafeQuery);

console.log(safeQuery); // Output: "what%20is%20javascript%3F"

// The full URL would look like:
// "https://www.google.com/search?q=what%20is%20javascript%3F"

// To change it back:
let originalQuery = decodeURIComponent(safeQuery);
console.log(originalQuery); // Output: "what is javascript?"




// Create a list with duplicate tags
let tags = ['javascript', 'webdev', 'coding', 'javascript', 'css'];

// Create a new Set from the array
let uniqueTags = new Set(tags);

console.log(uniqueTags); // Output: Set(4) { 'javascript', 'webdev', 'coding', 'css' }





let buffer = new ArrayBuffer(16);
let view = new DataView(buffer);

// At position 0, write an 8-bit integer with the value 255
view.setUint8(0, 255);

// At position 1, write a 16-bit integer with the value 65535
view.setUint16(1, 65535);

// Now, let's read the data back
console.log(view.getUint8(0)); // Output: 255
console.log(view.getUint16(1)); // Output: 65535




function toUpper(string) {
  return string.toUpperCase();
}

const cats =  ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]



let arr = [1, "hello", true];
arr.push({name: "JS"}); 
console.log(arr); // [1, "hello", true, {name: "JS"}]

 let arr1 = [10, 20];
arr1["hello"] = 99;
console.log(arr1.length); // 2  (doesn’t count "hello")
console.log(arr1.hello);  // 99 (just behaves like an object property)


// Start with a simple array. These are ELEMENTS.
const years = [2022, 2023, 2024];

// Now, let's add a PROPERTY using a string key that is not a valid index.
years['owner'] = 'Saddam';

years['02'] = 'This is a property, not an element';


// Accessing an ELEMENT from a numbered slot
console.log(years['2']); // Output: 2024


console.log(years['owner']); // Output: 'Saddam'
console.log(years[2]);  

console.log(years.length); // Output: 3


years.forEach(year => {
  console.log(year);
});

// Output:
// 2022
// 2023
// 2024

const fruits = ['apple', 'banana']; // Length is 2

// Add an element at index 5
fruits[5] = 'mango';

console.log(fruits.length); // Output: 6
// The length becomes (highest index + 1), so 5 + 1 = 6.
console.log(fruits[3]); // Output: ['apple', 'banana', <3 empty items>, 'mango']



const fruits1 = [];
fruits1.push("banana", "apple", "peach");
console.log(fruits1.length); // 3
console.log(fruits1); // ["banana", "apple", "peach"]


fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined



// A "sparse" array with empty slots at indices 3 and 4
const colors = ['red', 'yellow', 'blue'];
colors[5] = 'purple';

console.log("Old Librarian's Report (forEach):");
colors.forEach((item, index) => {
  console.log(`Shelf #${index} has a book: ${colors[index]}`);
});

console.log("\nNew Librarian's Report (keys loop):");
for (const index of colors.keys()) {
  console.log(`Checking shelf #${index}... it contains: ${colors[index]}`);
}


console.log("\nNew Librarian's Report (reverse loop):");
for (const index of colors.toReversed()) {
  console.log(`Checking shelf #${index}`);
}



// Our original array
let letters = ['a', 'b', 'c'];
console.log("Original letters:", letters); // Output: ['a', 'b', 'c']

// Let's reverse it. This is a MUTATING operation.
letters.reverse();

// Now, let's look at our original array again.
console.log("Original letters AFTER reverse():", letters); // Output: ['c', 'b', 'a']



// Our original array
let numbers = [1, 2, 3];
console.log("Original numbers:", numbers); // Output: [1, 2, 3]

// Let's create a reversed copy. This is a NON-MUTATING operation.
const reversedNumbers = numbers.toReversed();

// Let's look at the NEW array
console.log("The new, reversed copy:", reversedNumbers); // Output: [3, 2, 1]

// And most importantly, let's check our original array.
console.log("Original numbers AFTER toReversed():", numbers); // Output: [1, 2, 3]


// Array with a simple value (number) and a complex value (object)
const originalData = [100, { name: 'Saddam' }];

// Let's make a shallow copy using slice(), a non-mutating method.
const copiedData = originalData.slice();

// 1. Let's change the simple value in the copy.
copiedData[0] = 200;

// 2. Now let's change the object's property in the copy.
// This is like changing the recipe in the single red binder.
copiedData[1].name = 'Hosyn';

// --- Let's see the results ---

// The copy is what we expect:
console.log(copiedData); // Output: [200, { name: 'Hosyn' }]

// But look at the original!
console.log(originalData); // Output: [100, { name: 'Hosyn' }]


const abc = [1, 2, 3];
abc.fill(6, -1); 
console.log(abc); // [1, 2, 6]

const abc1 = [1, 2, 3];
abc1.fill(6, abc1.length-1); 
console.log(abc1); // [1, 2, 6]


const plants = ["b", "c", "c", "k", "t"];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

console.log(plants.pop());

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]



const arr2 = [1, 2, 3];
const newArr = arr2.slice(0, -1);

console.log(arr2);    // [1, 2, 3] (original unchanged)
console.log(newArr); // [1, 2] (new array without last element)

const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
console.log(Array.prototype.pop.call(arrayLike));

console.log(arrayLike);


const arr5 = [];
arr5.push(10, 20, 30);
console.log(arr5.length); // 3
arr5.pop();
console.log(arr5.length); // 2
console.log(arr5[0]);
console.log(arr5[1]);
console.log(arr5[2]);


