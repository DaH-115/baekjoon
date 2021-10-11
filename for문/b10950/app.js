const fs = require('fs');
const input = fs.readFileSync('./input.text').toString().split('\n');

const T = input[0];
const testCaseArr = [];
for (let i = 1; i <= T; i++) {
  const newArr = input[i].split(' ');
  // testCaseArr.push({ a: value[0], b: value[1] }); - 객체 구조 분해 할당을 이용한 방법
  testCaseArr.push(newArr);
}

function solution(T, testCaseArr) {
  for (let i = 0; i < T; i++) {
    const a = parseInt(testCaseArr[i][0]);
    const b = parseInt(testCaseArr[i][1]);
    console.log(a + b);
  }
}

solution(T, testCaseArr);
