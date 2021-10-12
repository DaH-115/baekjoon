const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
const input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(N) {
  let stars = '';
  for (let i = 0; i < N; i++) {
    stars += '*';
    console.log(stars);
  }
}
