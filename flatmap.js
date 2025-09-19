const arr = [1, 2, 1];

const result = arr.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result);
// Expected output: Array [1, 2, 2, 1]

// use of flatMap with condition
const arr1 = [1, 2, 1, ,];

const result1 = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result1);
// Expected output: Array [1, 2, 2, 1]

 
// use of flatMap with no condition
const arr2 = [1, 2, 1];

const result2 = arr2.flatMap((num) => [num]);

console.log(result2);
// Expected output: Array [1, 2, 2, 1]

const array = [1, 2, 3];
const val1 = array.flatMap((x) => [x, x * 2]);
console.log(val1); // [1, 2, 2, 4, 3, 6]


const array1 = [1, 2, 3];

//const val2 = array1.map(x => [x, x * 2]).flat(1);   // writing flat(1) or flat() is same, b/c default depth is 1, it flattens only one level always
const val2 = array1.map(x => [x, x * 2]).flat();
console.log(val2); // [1, 2, 2, 4, 3, 6]


const arr5 = [1, 2, 3, 4];

arr5.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr5.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr5.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]


const arr9 = ["it's Sunny in", "", "California"];

arr9.map((x) => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr9.flatMap((x) => x.split(" "));
// ["it's","Sunny","in", "", "California"]
console.log(arr9.flatMap((x) => x.split(" ")));




// Let's say we want to remove all the negative numbers
// and split the odd numbers into an even number and a 1
const a = [5, 4, -3, 20, 17, -33, -4, 18];
//         |\  \  x   |  | \   x   x   |
//        [4,1, 4,   20, 16, 1,       18]

const result3 = a.flatMap((n) => {
  if (n < 0) {
    return [];
  }
  return n % 2 === 0 ? [n] : [n - 1, 1];
});
console.log(result3); // [4, 1, 4, 20, 16, 1, 18]


const a1 = [5, 4, -3, 20, 17, -33, -4, 18];
const result11 = a1.flatMap((n) => {
  if (n < 0) {
    return [];           // REMOVE negative numbers
  }
  return n % 2 === 0 ? [n] : [n - 1, 1];  // KEEP even numbers, SPLIT odd numbers
});


const stations = ["New Haven", "West Haven", "Milford (closed)", "Stratford"];
const line = stations
  .filter((name) => !name.endsWith("(closed)"))
  .flatMap((name, idx, arr) => {    // arr is the intermediate array after filter
    // Without the arr argument, there's no way to easily access the
    // intermediate array without saving it to a variable.
    if (idx === arr.length - 1) return []; // last station has no next station
    return [`${name} - ${arr[idx + 1]}`];
  });
console.log(line); // ['New Haven - West Haven', 'West Haven - Stratford']



const arrayLike = {
  length: 3,
  0: 1,
  1: 2,
  2: 3,
  3: 4, // ignored by flatMap() since length is 3
};
console.log(Array.prototype.flatMap.call(arrayLike, (x) => [x, x * 2]));
// [1, 2, 2, 4, 3, 6]

// Array-like objects returned from the callback won't be flattened
console.log(
  Array.prototype.flatMap.call(arrayLike, (x) => ({
    length: 1,
    0: x,
  })),
);
// [ { '0': 1, length: 1 }, { '0': 2, length: 1 }, { '0': 3, length: 1 } ]
