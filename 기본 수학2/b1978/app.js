const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input.shift());
const numArr = input[0].split(' ').map((num) => Number(num));
let count = 0;

function primeNum(n) {
  if (n < 2) {
    return;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return;
    }
  }
  count += 1;
}

for (let i = 0; i < N; i++) {
  primeNum(numArr[i]);
}

console.log(count);
