const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
const input = fs.readFileSync(filePath).toString().split('\n');

const T = input[0];
const testcaseArr = [];
for (let i = 1; i <= T; i++) {
  testcaseArr.push(input[i].split(' '));
}

function solution(T, testcaseArr) {
  for (let i = 0; i < T; i++) {
    const a = parseInt(testcaseArr[i][0]);
    const b = parseInt(testcaseArr[i][1]);

    console.log(`Case #${i + 1}: ${a} + ${b} = ${a + b}`);
  }
}

solution(T, testcaseArr);
