const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
const input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

function solution(N) {
  console.log(N.charCodeAt());
}
