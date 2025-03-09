
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
