const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
const input = fs.readFileSync(filePath).toString().split('\n');

const [N, X] = input[0].split(' ').map((i) => parseInt(i));
const A = input[1].split(' ').map((i) => parseInt(i));

solution(N, A, X);

function solution(N, A, X) {
  const minNums = [];
  for (let i = 0; i <= N; i++) {
    if (A[i] < X) {
      minNums.push(A[i]);
    }
  }
  console.log(minNums.join(' '));
}
