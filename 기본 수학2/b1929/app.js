const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = require('fs').readFileSync(filePath).toString().split(' ');

const M = Number(input[0]);
const N = Number(input[1]);

const isPrimeNum = Array(N + 1).fill(true);
isPrimeNum[1] = false;

for (let i = 2; i <= Math.ceil(Math.sqrt(N)); i++) {
  if (isPrimeNum[i]) {
    let m = 2;
    while (i * m <= N) {
      isPrimeNum[i * m] = false;
      m += 1;
    }
  }
}

const results = [];
for (let i = M; i <= N; i++) {
  if (isPrimeNum[i]) {
    results.push(i);
  }
}

console.log(results.join('\n'));

// NOTE:
// 에라토스테네스의 체:
// 다수의 자연수에 대하여 소수 여부를 판별할 때 사용하는 대표적인 알고리즘
// N보다 작거나 같은 모든 소수를 찾을 때 사용할 수 있어 이 문제를 풀기에 적합하다
// 1. 2부터 N까지의 모든 자연수를 나열한다.
// 2. 남은 수 중에서 아직 처리하지 않은 가장 작은 수 i를 찾는다.
// 3. 남은 수 중에서 i의 배수를 모두 제거한다. (i는 제거하지 않는다.)
// 4. 더 이상 반복할 수 없을 때까지 2번과 3번의 과정을 반복한다.

// 2 이상의 임의의 자연수 N의 약수들은, 가운데 약수를 기준으로 곱셈 연산에 대해 대칭을 이룬다.
// 예를 들어, 16의 약수는 1, 2, 4, 8, 16이고 이때 2 x 8 = 16은 8 x 2 = 16과 대칭이다.
// 따라서 자연수의 모든 약수를 찾을 때 가운데 약수(제곱근)까지만 확인하면 된다.
// 위의 특성을 이용하면 N의 제곱근 이상의 최소 자연수까지만 나눠도 된다는 사실을 알 수 있다.
// 이것을 3번 과정에서 적용한다.
