
/*

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3);

*/

let text1 = "Hello";
let text2 = "World";
let text3 = text1 + " " + text2;
console.log(text3);



const first = "Hello";
const second = "Chris";
console.log(first + ", " + second); // "Hello, Chris"


const third = "world";
const forth = "happy";
console.log(`${third}, ${forth}`); // "Hello, Chris"

const song = "fight the youth";
const score = 9;
const highestscore = 11;

console.log(`i like the song ${song}. \nI gave it a score of ${score} out of ${highestscore}.`);



const badQuotes = 'She said "I think so!"';
console.log(badQuotes);

const goodQuotes1 = "She said \"I think so!\"";
console.log(goodQuotes1);


const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);



const name = 'Front ';
const number = 242;
console.log(name + number); // "Front 242"


const myNumb = 123;
const myNumber = String(myNumb);
console.log(typeof myNumber);
// number

const browserType = "mozilla";
console.log(browserType.length);

console.log(browserType[0]);
console.log(browserType[3]);

console.log(browserType[browserType.length - 1]);


const browserTypes = "mozilla";

if (browserTypes.includes("k")) {
  console.log("Found k!");
} else {
  console.log("No k here!");
}


const browser = "mozilla";

if (browser.endsWith("moz")) {
  console.log("Found moz!");
} else {
  console.log("No moz here!");
}


const tagline = "MDN - Resources for for developers, by developers";
console.log(tagline.indexOf("Z"));



const firstOccurrence = tagline.indexOf("for");
const secondOccurrence = tagline.indexOf(firstOccurrence + 1);

console.log(firstOccurrence); 
console.log(secondOccurrence); 



const brows = "mozilla";
console.log(brows.slice(2, 7)); // "ozi"



const radData = "my name is danger";
console.log(radData.toLowerCase()); // "danger"
console.log(radData.toUpperCase());


const onlinetype = "Chrome";
console.log(onlinetype.replace("rome", "orm"));



let quote = "to be or not to be";
console.log(quote.replaceAll("to", "code"));



let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZåöä";
let length = text.length;

console.log(length);



let text101 = "HELLO WORLD";
let char = text101.charAt(3);
console.log(char);



let text103 = "HELLO WORLD";
let char1 = text103.charCodeAt(0);
console.log(char1);



let text106 = "😊";
let code = text106.codePointAt(0);
console.log(code);


const stringname = "W3Schools";
let letter = stringname.at(2);
console.log(letter);



const letter1 = "W3Schools";
let letter2 = letter1.at();
console.log(letter2); // "W"


let text201 = "geedy";
let text204 = "old";
let text303 = text201.concat(' ', text204);
console.log(text303); // "geedy old"



word = "hello" + " " + "world";
word = "hello".concat(" ", "world");

let another = "Apple, Banana, Kiwi";
let part = another.slice(-12, -6);
console.log(part);



let str = "meng, gao, Kiwi";
let strpart = str.substring(12, 1);
console.log(strpart);


let texting = "Hello World \uD800";
let resulting = texting.isWellFormed();
console.log(resulting); // true


let text170 = '        :Hello         World!        :';
let text290 = text170.trimStart();
console.log(text290); // "Hello         World!        "
