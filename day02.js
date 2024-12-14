//puzzle input consists of many 'reports' - one 'report' per line
// each is a list of numbers called 'levels', separated by spaces.
// find out which level is safe.
// Safe = levels are 'all increasing' OR 'all decreasing'
// Safe = any two adjacent levels differ by 'at least one' and 'at most three'

const fs = require("fs");
const data = fs.readFileSync("day02-input.txt", "utf8");
let reports = [];

// const reports = [
//   [7, 6, 4, 2, 1],
//   [1, 2, 7, 8, 9],
//   [9, 7, 6, 2, 1],
//   [1, 3, 2, 4, 5],
//   [8, 6, 4, 4, 1],
//   [1, 3, 6, 7, 9],
// ];

const splitData = data.split("\n");
splitData.forEach((row) => {
  const line = row.trim().split(" ").map(Number); //convert to numbers
  reports.push(line);
});
// console.log(reports);

//container to store safeReports
let safeReportsCount = 0;

//want to iterate through each report (subarray) for differences
for (let i = 0; i < reports.length; i++) {
  let report = reports[i];
  let validDifference = true;
  let allIncreasing = true;
  let allDecreasing = true;

  // Check if the report is either all increasing or all decreasing
  for (let j = 0; j < report.length - 1; j++) {
   let diff = Math.abs(report[j + 1] - report[j]);

   // If the difference is not between 1 and 3, it's not valid
   if (diff < 1 || diff > 3) {
     validDifference = false;
     break;
   }

   // Check if the sequence is strictly ALL increasing or strictly ALL decreasing
   if (report[j + 1] <= report[j]) {
     allIncreasing = false;  // Not strictly increasing
   }
   if (report[j + 1] >= report[j]) {
     allDecreasing = false;  // Not strictly decreasing
   }
 }

 // Report is safe if it's either strictly increasing or strictly decreasing, and all differences are valid
 if (validDifference && (allIncreasing || allDecreasing)) {
   safeReportsCount++;
 }
}
console.log(safeReportsCount)