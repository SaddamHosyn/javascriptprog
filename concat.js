const num1 = [1, 2, 3];
const num2 = [4, , , , 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]


const letters = ["a", "b", "c"];

const alphaNumeric = letters.concat(1, [2, 3]);

console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]


const num101 = [[1]];
const num202 = [2, [3]];

const numbers1 = num202.concat(num101);

console.log(numbers1);
// results in [[1], 2, [3]]

// modify the first element of num101
num101[0].push(4);

console.log(numbers1);
// results in [[1, 4], 2, [3]]
const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3 };
console.log([0].concat(obj1, obj2));
// [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]


console.log([].concat.call({}, 1, 2, 3)); // [{}, 1, 2, 3]
console.log([].concat.call(2, 5, 3)); // [ [Number: 1], 2, 3 ]
const arrayLike = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: 1,
  1: 2,
  2: 99, // ignored by concat() since length is 2
};
console.log([].concat.call(arrayLike, 3, 4)); // [1, 2, 3, 4]
