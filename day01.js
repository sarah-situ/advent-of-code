const fs = require("fs");

// Read the file synchronously
const data = fs.readFileSync("./day01-input.txt", "utf8");

//check that it is pulling data from day01-input.text
// console.log("File content:", data);

//containers to hold values from left and right columns
let arrayLeft = [];
let arrayRight = [];

//split data into left and right columns
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
for (let i = 0; i < arrayLeft.length; i++) {
  //sum together differences
  totalDistance += Math.abs(arrayLeft[i] - arrayRight[i]);
}
// console.log(totalDistance)

// Part 2 - Similarity score
// Calculate how often a number in left array appears in the right array
// and multiply it by the number of times it appears in the right array.


let similarity = 0;
let count = 0


arrayLeft.forEach(x => {
    // count how many times the 'x' appears in arrayRight
    const count = arrayRight.filter(element => element === x).length
   // multiply count by the 'x' value and add to similarity
   similarity += count * x
})
console.log(similarity)