const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const numArr = input.map((n) => Number(n));
const N = numArr.shift();
const sortedNumArr = numArr.sort((a, b) => a - b);
const numMap = {};

console.log(sortedNumArr);

// map 생성 - 이미 있는 값에는 +1 해준다 (map 으로 생성하면 나중에 다시 정렬 해주어야 함)
for (let num of sortedNumArr) {
  if (numMap[num]) {
    numMap[num] = numMap[num] + 1;
  } else {
    numMap[num] = 1;
  }
}

// 가장 많이 나타난 수를 배열로 만들어 준다
let maxNum = Math.max(...Object.values(numMap));
let maxNumArr = [];
let maxNumResult = 0;
console.log('maxNum', maxNum);
console.log('numMap', numMap);
for (let numKey in numMap) {
  // console.log(numKey);
  if (numMap[numKey] === maxNum) {
    maxNumArr.push(numKey);
  }
}

console.log(maxNumArr);

// 배열이 1보다 크면 두 번째 최빈값을 구해준다
if (maxNumArr.length > 1) {
  maxNumArr = maxNumArr.sort((a, b) => a - b);
  console.log(maxNumArr);
  maxNumResult = maxNumArr[1];
} else {
  maxNumResult = maxNumArr[0];
}
console.log(maxNumResult);

const avg = Math.round(numArr.reduce((acc, num) => (acc += num), 0) / N);
const center = numArr[Math.floor(numArr.length / 2)];
const maxSubMin = sortedNumArr[sortedNumArr.length - 1] - sortedNumArr[0];

console.log(avg);
console.log(center);
console.log(maxNumResult);
console.log(maxSubMin);
