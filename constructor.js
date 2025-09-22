
/*
let message = "Hello World!";
let text = message.constructor;
console.log(text);



let message = "Hello";
console.log(typeof message); // "string"

let objMessage = new String("Hello");
console.log(typeof objMessage); // "object"

*/


console.log((42).constructor);         // [Function: Number]
console.log((true).constructor);       // [Function: Boolean]
console.log([1, 2, 3].constructor);    // [Function: Array]
console.log({ a: 1 }.constructor);     // [Function: Object]
console.log(function () {}.constructor); // [Function: Function]


// Array (capital A) = the constructor/factory itself
// This exists in JavaScript automatically - you don't create it

// Individual arrays = things created FROM the constructor
const myArray = [1, 2, 3];        // Individual array (instance)
const fruits = ["apple", "banana"]; // Individual array (instance)
const numbers = new Array(1, 2, 3); // Individual array (instance)
console.log(fruits.constructor);    // [Function: Array]
console.log(numbers.constructor);   // [Function: Array]
console.log(myArray.constructor);   // [Function: Array]



console.log(Array.from("hello")); // Output: ['h', 'e', 'l', 'l', 'o']
console.log(Array.of(1, 2, 3));   // Output: [1, 2, 3]   

