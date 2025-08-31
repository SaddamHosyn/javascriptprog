const object = {};

Object.defineProperty(object, "foo", {
  value: 42,
  writable: false,
});

object.foo = 77;
// Throws an error in strict mode

console.log(object.foo);
// Expected output: 42




const user = {
  name: "Saddam"
};

// Add a hidden internal ID
Object.defineProperty(user, '_internalId', {
  value: 'xyz-987',
  enumerable: false // Hide this from loops
});

// The user can still get the ID if they know its exact name
console.log(user._internalId); // "xyz-987"

// But it won't show up when listing the main properties
console.log(Object.keys(user)); // [ "Saddam" ] (The internal ID is not listed)


const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"




const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"

console.log(eval(s2.valueOf())); // returns the number 4



console.log("data: " + undefined);


console.log("A".length);   // Outputs 1 (one box)
console.log("😂".length);  // Outputs 2 (two boxes for one emoji)



const mySymbol = Symbol("a description");

const rtx0 = String(mySymbol); // This works and gives you "Symbol(a description)"

console.log(rtx0);

const stringw = String(123);
console.log(stringw);
const stringw2 = new String("123");
console.log(stringw2);


// Give it the numbers for 'A', 'B', and 'C'
let myString = String.fromCharCode(75, 66, 67);

console.log(myString); // Outputs: "ABC"


// Give it the real, big number for the emoji

console.log(String.fromCodePoint(127747));


let path = String.raw`C:\Users\Name\Documents\file.txt`;
console.log(path);


console.log( '01' == 1 );
console.log( '01' === 1 );



let b = "0";
console.log( Boolean(b) ); 



console.log( null == 0 ); 


console.log( undefined == null );
console.log( undefined === null );
console.log( null == "\n0\n" );
console.log( null === +"\n0\n" );
