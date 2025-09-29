const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}


console.log(":************************Another Example**************************:");
const catss = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (let i = 0; i < catss.length; i++) {
  console.log(catss[i]);
}

console.log(":************************Another Example**************************:");

const catse = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (const cat of catse) {
  // myFavoriteCats += `${cat}, `;
 
  if (cat === catse[catse.length - 1]) {
    myFavoriteCats = myFavoriteCats + `and ${cat}. `;
  } else {
     myFavoriteCats = myFavoriteCats + `${cat}, `;
  }
 
}
 console.log(myFavoriteCats);

