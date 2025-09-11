const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"

console.log(elements.join("-"));
// Expected output: "Fire-Air-Water" 



const elements1 = [" "];

console.log(elements1.join());




const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9
console.log(matrix.join(";")); // 1,2,3;4,5,6;7,8,9


const arr = [];
arr.push(1, [3, arr, 4], 2);
console.log(arr.join(";")); // 1;3,,4;2


const arr1 = [];
arr1.push(1, [ , arr1, 4], 2);
console.log(arr1.join(";")); // 1;,,4;2
console.log(arr1[0]);
console.log(arr1[1]);
console.log(typeof arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);



const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // ignored by join() since length is 3
};
console.log(Array.prototype.join.call(arrayLike));
// 2,3,4
console.log(Array.prototype.join.call(arrayLike, "."));
// 2.3.46

// the above and below code is same ([].join.call() =====   Array.prototype.join.call())

const arrayLike1 = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // ignored by join() since length is 3
};
console.log([].join.call(arrayLike1));
// 2,3,4
console.log([].join.call(arrayLike1, "."));
