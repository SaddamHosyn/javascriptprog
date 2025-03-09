
let text = "How are you doing today?";
const myArray = text.split("    ");
console.log(myArray);



let text1 = "How   are  you    doing today?";
console.log(text1.split(" ").filter(word => word !== ""));
// Output: [ 'How', 'are', 'you', 'doing', 'today?' ]

let text0 = "How are you doing today?";
const myArray0 = text0.split(" ");
console.log(myArray0);



let text101 = "How are you doing today?";
const myArray101 = text101.split(" ");
let word = myArray101[1];
console.log(word);


let line = "How are you doing today?";
const myArray1 = line.split(" ", 3);
// const myArray = text.split("o");  letter as  a separator
console.log(myArray1);
