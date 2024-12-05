const fs = require("fs");

// Read the file synchronously
const data = fs.readFileSync("./2024/day01-input.txt", "utf8");

//check that it is pulling data from day01-input.text
// console.log("File content:", data);

//containers to hold values from left and right columns
let arrayLeft = [];
let arrayRight = [];

//split data into left and right arrays
const splitData = data.split("\n");
splitData.forEach((row) => {
    const columns = row.split("   ");
    const left = columns[0];
    const right = columns[1];
    arrayLeft.push(left);
    arrayRight.push(right);
});


// sort arrays from descending to highest order
arrayLeft.sort();
arrayRight.sort();


//store total distance
let totalDistance = 0;

//for loop to iterate arrays and find the absolute difference between left and right array
for(let i= 0; i < arrayLeft.length; i++) {
    //sum together differences
totalDistance += Math.abs(arrayLeft[i] - arrayRight[i]);
}
console.log(totalDistance)

