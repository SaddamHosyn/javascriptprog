let i = 0;
do {
  i += 1;
  console.log("do while loop", i);
} while (i < 5);
 


console.log("********ANOTHER EXAMPLE*************");

for (j = 2; j < 10; j++) {
  console.log("simple for loop", j);
}


console.log("********ANOTHER EXAMPLE*************");


let n = 0;
let x = 0;
while (n < 10) {
  n++;
  x += n;
}
console.log("while loop", x);


console.log("********ANOTHER EXAMPLE*************");

// Labels become useful when you have nested loops (loops inside loops) and you want to break out of the outer loop from inside the inner loop.
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop; // Exits the entire outer loop (i loop)
    }
    console.log(`i=${i}, j=${j}`);
  }
}


console.log("********ANOTHER EXAMPLE*************");

let a = [1, 2, 3, 4, 5];
let theValue = 3;
let k;
for (k = 0; k < a.length; k++) {
  if (a[k] === theValue) {
    break;
  }
}
console.log("Found value at index " + k);


console.log("********ANOTHER EXAMPLE*************");

let x11 = 0;
let z1 = 0;
labelCancelLoops: while (true) {
  console.log("Outer loops:", x11);
  x11 += 1;
  z1 = 1;
  while (true) {
    console.log("Inner loops:", z1);
    z1 += 1;
    if (z1 === 10 && x11 === 10) {
      break labelCancelLoops; // Exit BOTH loops when both counters reach 10
    } else if (z1 === 10) {
      break;                 // Exit only inner loop when z1 reaches 10
    }
  }
}


console.log("********ANOTHER EXAMPLE*************");

let m = 0;
let p = 0;
while (m < 5) {
  m++;
  if (m === 3) {
    continue;
  }
  p += m;
  console.log(p);
}
// Logs:
// 1 3 7 12

console.log("********ANOTHER EXAMPLE*************");

let index = 0;
let secondIndex = 10;
checkIandJ: while (index < 4) {
  console.log("SHOW THE INDEX", index);
  index += 1;
  checkJ: while (secondIndex > 4) {
    console.log(secondIndex);
    secondIndex -= 1;
    if (secondIndex % 2 === 0) {
      continue;
    }
    console.log(secondIndex, "is odd.");
  }
  console.log("firstIndex-loop =", index);
  console.log("secondIndex-loop =", secondIndex);
}

console.log("********ANOTHER EXAMPLE*************");

const car = { make: "Ford", model: "Mustang" };

for (const key in car) {
  console.log(key, "=", car[key]);
}
// Output:
// make = Ford
// model = Mustang

console.log("********ANOTHER EXAMPLE*************");
const user = { name: "Ada", role: "admin" };
for (const value in user) {
  if (Object.hasOwn(user, value)) {
    console.log(value, user[value]); // name Ada, role admin
  }
}


console.log("********ANOTHER EXAMPLE*************");
const user1 = { name: "Ada", role: "admin" };
for (const key in user1) {
  if (Object.hasOwn(user1, key)) {
    console.log(key, user1[key]); // name Ada, role admin
  }
}


console.log("********ANOTHER EXAMPLE*************");
const str = "Hello";
for (const ch of str) console.log(ch); // H, e, l, l, o



console.log("********ANOTHER EXAMPLE*************");
const z = new Map([["a",1],["b",2]]);
for (const [k,v] of z) console.log(k, v); // a 1, b 2
