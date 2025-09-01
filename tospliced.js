const arr = ["a", "b", "c", "d"];
const result = arr.toSpliced(1); // No second number!
// Result: ["a"]
console.log(result);


const arr1 = ["a", "b", "c", "d"];
const result1 = arr1.toSpliced(1, Infinity);
// Result: ["a", "X", "Y"]
console.log(result1);






const months = ["Jan", "Mar", "Apr", "May"];

const months1 = months.toSpliced(1, 1, "Feb", "Mar", "June");
console.log(months1); // ["Jan", "Feb", "Mar", "May"]



const arr101 = ["A", "B", "C"];
const result12 = arr101.toSpliced(1, 0, "B", "B");
console.log(result12); // ["A", "B", "B", "B", "C"]




const arr302 = [1, , , 3, 4, , 6];
console.log(arr302.toSpliced(1, 2)); // [1, 4, undefined, 6]




const arr505 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("arr505:",arr505.toSpliced(1, 5)); // [1, 4, undefined, 6]
 

const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
console.log(Array.prototype.toSpliced.call(arrayLike, 0, 1, 2, 3));
// [2, 3, undefined, 4]



const arrayLike1 = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
console.log(Array.prototype.toSpliced.call(arrayLike1, 0, 1, 2, 3));
// [2, 3, undefined, 4]
