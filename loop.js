let i = 0;
do {
  i += 1;
  console.log("do while loop", i);
} while (i < 5);


for (j = 2; j < 10; j++) {
  console.log("simple for loop", j);
}




let n = 0;
let x = 0;
while (n < 10) {
  n++;
  x += n;
}
console.log("while loop", x);


// Labels become useful when you have nested loops (loops inside loops) and you want to break out of the outer loop from inside the inner loop.
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop; // Exits the entire outer loop (i loop)
    }
    console.log(`i=${i}, j=${j}`);
  }
}

let a = [1, 2, 3, 4, 5];
let theValue = 3;
let k;
for (k = 0; k < a.length; k++) {
  if (a[k] === theValue) {
    break;
  }
}
console.log("Found value at index " + k);



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
