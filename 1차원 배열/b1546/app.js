const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = fs.readFileSync(filePath).toString().split('\n');

const num = input[0];
const scores = input[1].split(' ').map((i) => Number(i));
const maxNum = Math.max(...scores);

solution(num, maxNum, scores);

function solution(num, maxNum, scores) {
  let allScore = 0;
  for (let i = 0; i < num; i++) {
    allScore += (scores[i] / maxNum) * 100;
  }
  console.log(allScore / num);
}
