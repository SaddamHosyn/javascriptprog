let value = 67;
let result = String.fromCharCode(value);
console.log(result);


// the below code is same but the value is an array and we need to use spread operator to make the array unpacks into individual elements. because the fromCharCode() method expects a number, not an array of numbers.

let value1 = [87, 89, 91, 93, 99];
let result1 = String.fromCharCode(...value1);
console.log(result1);
