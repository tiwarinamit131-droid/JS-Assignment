let a = Number(prompt("Enter correct answers:"));
let b = Number(prompt("Enter partial answers:"));
let c = Number(prompt("Enter wrong answers:"));
let score = 3 * a + b - 2 * c;
if (score < 0) {
    score = 0;
}
if (a + b + c > 50) {
    score -= 10;
}
if (score < 0) {
    score = 0;
}
var result;
if (score >= 60) {
    result = "PASS";
} else {
    result = "FAIL";
}
alert(score + ", " + result);