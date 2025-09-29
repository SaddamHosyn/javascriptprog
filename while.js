

const output = document.getElementById("p"); 
let i = 10;
while (i >= 0) {  // Count from 10 down to 0
  const para = document.createElement('p');
  
  if (i === 10) {
    para.textContent = "Countdown 10";
  } else if (i === 0) {
    para.textContent = "Blast off!";
  } else {
    para.textContent = i;
  }
  
  output.appendChild(para);
  i--;  // Count down (subtract 1)
}
