const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = require('fs').readFileSync(filePath).toString().split('\n');

const M = Number(input[0]);
const N = Number(input[1]);
const primeNumArr = [];
let primeNumSum = 0;

function primeNum(n) {
  if (n < 2) {
    return;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return;
    }
  }

  primeNumSum += n;
  primeNumArr.push(n);
}

for (let i = M; i <= N; i++) {
  primeNum(i);
}

if (!primeNumArr.length) {
  console.log(-1);
} else {
  console.log(primeNumSum);
  console.log(Math.min(...primeNumArr));
}
