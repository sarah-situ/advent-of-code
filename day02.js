//puzzle input consists of many 'reports' - one 'report' per line
// each is a list of numbers called 'levels', separated by spaces.
// find out which level is safe.
// Safe = levels are 'all increasing' OR 'all decreasing'
// Safe = any two adjacent levels differ by 'at least one' and 'at most three'

const fs = require("fs");

// Read the file synchronously
const data = fs.readFileSync("day02-input.txt", "utf8");

//check that it is pulling data from day02-input.text
// console.log("File content:", data);

//container to hold the levels
let levels = [];
levels.push(data)
// console.log(levels)

const splitData = data.split("\n");
 splitData.forEach((row) => {
    const line = row.split (" ");
    levels.push(line);
 })
 console.log(levels)