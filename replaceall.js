let text = "I love Cats and cats and fig!";
text = text.replaceAll(/Cats/g, "Dogs");
text = text.replaceAll(/cats/g, "dogs");
console.log(text);
