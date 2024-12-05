const fs = require("fs");

// Read the file synchronously
const data = fs.readFileSync("./2024/day01-input.txt", "utf8");

//check that it is pulling data from day01-input.text
// console.log("File content:", data);

//containers to hold values from left and right columns
let arrayLeft = [];
let arrayRight = [];

const splitData = data.split("\n");
splitData.forEach((row) => {
    const columns = row.split("   ");
    const left = columns[0];
    const right = columns[1];
    arrayLeft.push(left);
    arrayRight.push(right);
});
console.log("Left Array:",arrayLeft);
console.log("Right Array:", arrayRight);
