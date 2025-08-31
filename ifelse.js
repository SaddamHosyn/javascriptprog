let temperature;
let choice = "sunny";
let para = document.querySelector("p");


if (choice === "sunny" && temperature < 86) {
   para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
 } else if (choice === "sunny" && temperature >= 86) {
   para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
 } else {
   para.textContent = `We're not sure what the weather is like. Let's stay inside and be cozy.`;
 }
 