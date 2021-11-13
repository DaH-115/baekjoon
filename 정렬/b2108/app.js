const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const numArr = input.map((n) => Number(n));
const N = numArr.shift();
const sortedNumArr = numArr.sort((a, b) => a - b);
const numMap = {};

for (let num of sortedNumArr) {
  if (numMap[num]) {
    numMap[num] = numMap[num] + 1;
  } else {
    numMap[num] = 1;
  }
}

let maxNum = Math.max(...Object.values(numMap));
let maxNumArr = [];
let maxNumResult = 0;

for (let numKey in numMap) {
  if (numMap[numKey] === maxNum) {
    maxNumArr.push(numKey);
  }
}

if (maxNumArr.length > 1) {
  maxNumArr = maxNumArr.sort((a, b) => a - b);
  maxNumResult = maxNumArr[1];
} else {
  maxNumResult = maxNumArr[0];
}

const avg = Math.round(numArr.reduce((acc, num) => (acc += num), 0) / N);
const center = numArr[Math.floor(numArr.length / 2)];
const maxSubMin = sortedNumArr[sortedNumArr.length - 1] - sortedNumArr[0];

console.log(avg);
console.log(center);
console.log(maxNumResult);
console.log(maxSubMin);
