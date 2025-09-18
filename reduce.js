

const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce(
 // This works but is hard to read:
(accumulator, currentValue, index) => (console.log(`Index: ${index}`), accumulator + currentValue)
//                                    ↑ Comma operator does both things
,
  initialValue
);

console.log(sumWithInitial);



const getMax = (a, b) => Math.max(a, b);

// Print the results:
console.log([50].reduce(getMax)); // 50
console.log([].reduce(getMax, 1)); // 1   

// THE ABOVE REDUCE WILL RETURN WHATEVER WE HAVE IN ARRAY, BECAUSE THERE IS NO INITIAL VALUE
// BUT IF WE HAVE INITIAL VALUE IT WILL RETURN SOMETHING ELSE 
// E.G. (50, 50, 10) ARE INITIAL VALUES.

console.log([1, 100, 200, 2, 3].reduce(getMax, 50)); // 100

// Has initial value + array not empty = process everything
console.log([1, 100].reduce(getMax, 50)); // 100
// ↑ Calls getMax: first getMax(50, 1), then getMax(50, 100)

console.log([50].reduce(getMax, 10)); // 50
// ↑ Calls getMax once: getMax(10, 50)
// No initial value = use first element as starting point
console.log([1000, 100].reduce(getMax)); // 100
// ↑ Uses 1 as starting value, calls getMax(1, 100) once



// Empty array + no initial value = ERROR!
//console.log([].reduce(getMax)); // TypeError
// ↑ "I have nothing to work with!"


const arr = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

arr.reduce(reducer);



const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0,
);

console.log(sum); // 6


const pipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => fn(acc), initialValue);

// Building blocks to use for composition
const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Usage
console.log(multiply6(6)); // 36
console.log(multiply9(9)); // 81
console.log(multiply16(16)); // 256
console.log(multiply24(10)); // 240


// Compare this with pipe: fn(acc) is changed to acc.then(fn),
// and initialValue is ensured to be a promise
const asyncPipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => acc.then(fn), Promise.resolve(initialValue));

// Building blocks to use for composition
const p1 = async (a) => a * 5;
const p2 = async (a) => a * 2;
// The composed functions can also return non-promises, because the values are
// all eventually wrapped in promises
const f3 = (a) => a * 3;
const p4 = async (a) => a * 4;

asyncPipe(p1, p2, f3, p4)(10).then(console.log); // 1200



console.log("=== SPARSE ARRAYS vs UNDEFINED VALUES ===\n");

// Example 1: Sparse array (missing elements)
console.log("1. Sparse array with missing elements:");
const sparseArray = [1, 2, , 4]; // Notice the empty spot after 2

console.log("reduce() result:", sparseArray.reduce((a, b) => a + b));
console.log("Explanation: reduce() SKIPS the missing element\n");

// Example 2: Array with undefined values
console.log("2. Array with undefined values:");
const undefinedArray = [1, 2, undefined, 4];

console.log("reduce() result:", undefinedArray.reduce((a, b) => a + b));
console.log("Explanation: reduce() does NOT skip undefined, tries to add it\n");

// More detailed examples
console.log("=== MORE EXAMPLES ===\n");

// Example 3: Multiple missing elements
console.log("3. Multiple missing elements:");
const multipleSparse = [1, , , 4, , 6];
console.log("Array:", multipleSparse);
console.log("reduce() result:", multipleSparse.reduce((a, b) => a + b));

// Example 4: Mixed undefined and missing
console.log("\n4. Mixed undefined and missing:");
const mixedArray = [1, , undefined, 4];
console.log("Array:", mixedArray);
console.log("reduce() result:", mixedArray.reduce((a, b) => a + b));

// Example 5: Creating sparse arrays different ways
console.log("\n=== DIFFERENT WAYS TO CREATE SPARSE ARRAYS ===");

// Way 1: Using delete
console.log("\n5a. Using delete operator:");
const deleteArray = [1, 2, 3, 4];
delete deleteArray[1];
console.log("After delete:", deleteArray);
console.log("reduce() result:", deleteArray.reduce((a, b) => a + b));

// Way 2: Setting length higher
console.log("\n5b. Setting length higher:");
const lengthArray = [1, 2];
lengthArray.length = 5;
lengthArray[4] = 3;
console.log("Array:", lengthArray);
console.log("reduce() result:", lengthArray.reduce((a, b) => a + b));

// Way 3: Array constructor
console.log("\n5c. Array constructor:");
const constructorArray = new Array(3);
constructorArray[0] = 1;
constructorArray[2] = 3;
console.log("Array:", constructorArray);
console.log("reduce() result:", constructorArray.reduce((a, b) => a + b));

// Bonus: Show what happens with string concatenation
console.log("\n=== BONUS: STRING CONCATENATION ===");
console.log("\n6. String concatenation with sparse:");
const stringsSparse = ["a", , "c"];
console.log("Array:", stringsSparse);
console.log("reduce() result:", stringsSparse.reduce((a, b) => a + b));

console.log("\n7. String concatenation with undefined:");
const stringsUndefined = ["a", undefined, "c"];
console.log("Array:", stringsUndefined);
console.log("reduce() result:", stringsUndefined.reduce((a, b) => a + b));




const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 99, // ignored by reduce() since length is 3
};
console.log(Array.prototype.reduce.call(arrayLike, (x, y) => x + y));
// 9
