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
console.log([].reduce(getMax)); // TypeError
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
