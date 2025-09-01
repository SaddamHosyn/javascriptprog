const animals = ["pigs", "goats", "sheep"];

const count = animals.push("cows");

console.log(count);


const sports = ["soccer", "baseball"];
sports.push("football", "swimming");
console.log(sports);



const originalShelf = ["book A", "book B"];
const newShelf = originalShelf.concat([2]);

// The original shelf is unchanged
console.log(originalShelf); // Output: ["book A", "book B"]

// The new shelf has all the books
console.log(newShelf); // Output: ["book A", "book B", "book C"]


const arr = [2, , 3, 4];

// push() → adds to the END
arr.push(5);
console.log(arr); // [2, 3, 4, 5]

// unshift() → adds to the BEGINNING
arr.unshift("heelo");
console.log(arr); // [1, 2, 3, 4, 5]

// shift() → removes from the BEGINNING
const first = arr.shift();
console.log(first); // 1 (removed element)
console.log(arr);   // [2, 3, 4, 5]
