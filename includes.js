let text = "Hello world";
let result = text.includes(" ");
console.log(result); // true
// includes is case sensitive

let text1 = "Hello world";
let result1 = text1.includes("Hello", 1);
console.log(result1); // true
// includes is case sensitive


const numbers = [1, 2, 3, 4, 5];

// -1 becomes index 4, searches [5] → no 2 found
console.log(numbers.includes(2, 1)); // false


// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97

const arr = ["a", "b", "c"];

arr.includes("a", -100); // true
arr.includes("b", -100); // true
arr.includes("c", -100); // true
arr.includes("a", -2); // false

console.log([1, , 3].includes(undefined)); // true



const numbers1 = [1, 2, 3, 4, 5];

// -1 becomes index 4, searches [5] → no 2 found
console.log(numbers1.includes(2, 1)); // false
