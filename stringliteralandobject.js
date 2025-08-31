let primitive = "Hello";
let object = new String("Hello");

console.log(typeof primitive); // "string"
console.log(typeof object);    // "object"


console.log(object === primitive); // false
console.log(object == primitive);  // true



const letter = "cat"[1]; // gives value "a"
console.log(letter); // "a"
