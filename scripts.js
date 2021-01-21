let result = 0 //10
let result1 = 0;
let answer1 = confirm("what is the official name of JavaScript?");

if (answer1) {
    result = result1 + 10;
}

let result2 = 10;
let answer2 = confirm("which HTML tag is used for paragraphs?");

if (answer2) {
    result = result2 + 10;
}

let result3 = 10;
let answer3 = confirm("what is the official name of JavaScript?");

if (answer3) {
    result = result2 + result3 + 10;
}





//Show results 
console.log("You've earned " + result + " points!");