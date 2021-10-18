const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
const input = fs.readFileSync(filePath).toString().split('\n');

const n = +input[0];
const nArr = input[1];

solution(n, nArr);

function solution(n, nArr) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += +nArr[i];
  }
  console.log(sum);
}
