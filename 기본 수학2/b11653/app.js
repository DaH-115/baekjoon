const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = require('fs').readFileSync(filePath).toString().split(' ');

let num = Number(input[0]);
let primeNum = 2;
let primes = [];

while (true) {
  if (num % primeNum === 0) {
    num = num / primeNum;
    primes.push(primeNum);
    primeNum = 1;
  }
  primeNum += 1;

  if (primeNum > num) {
    break;
  }
}

console.log(primes.join('\n'));

// NOTE:
// 소인수분해는 1보다 큰 자연수를 소인수(소수인 인수)들만의 곱으로 나타내는 것
