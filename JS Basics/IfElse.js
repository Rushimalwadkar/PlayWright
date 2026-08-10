console.log("Enter 2 Numbers to Compare");
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);
const a = Number(input[0]);
const b = Number(input[1]);
console.log("First Number: " + a);
console.log("Second Number: " + b);
if (a > b) {
    console.log("a is greater than b");
} else if (a < b) {
    console.log("a is less than b");
} else {
    console.log("a is equal to b");
} 