let result = 0 //10
let result1 = 10;
let answer1 = confirm("what is the official name of JavaScript?");

if (answer1) {
    result = result + 10;
}

let answer2 = confirm("which HTML tag is used for paragraphs?");
if (answer2) {
    result = result + 10;
}

let answer3 = confirm("in JavaScript is this correct? 20 + 20 = 40");
if (answer3) {
    result = result + 10;
}

let answer4 = confirm("h1 is the header?");
if (answer4) {
    result = result + 10;
}

let answer5 = confirm("Should a programmer use GitHub?");
if (answer5) {
    result = result + 10;
}

let answer6 = confirm("JavaScript is a programming language?");
if (answer6) {
    result = result + 10;
}

let answer7 = confirm("html and css is this site layout?");
if (answer7) {
    result = result + 10;
}

let answer8 = confirm("needed english for a programmer");
if (answer8) {
    result = result + 10;
}

let answer9 = confirm("practice for a programmer");
if (answer9) {
    result = result + 10;
}

//Show results 
console.log("You've earned " + result + " points!");