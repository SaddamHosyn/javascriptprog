
 
 const obj1 = { x: 1 };
const obj2 = obj1;   // obj2 points to the same object

obj2.x = 7;          // change through obj2
console.log(obj1.x); // 7 (same object seen through obj1)


const o1 = { x: 1 };
let o2 = o1;        // same object
o2 = { x: 99 };     // o2 now points to a new object
console.log(o1.x);  // 1  (unchanged)
console.log(o2.x);  // 99 (different object)


const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach(function(element, index, array) {
  console.log(`Item: ${element}, Position: ${index}`);
});
// Output:
// Item: apple, Position: 0
// Item: banana, Position: 1  
// Item: cherry, Position: 2
