const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = require('fs').readFileSync(filePath).toString().split(' ');

const N = input[0];

solution(N);

function solution(N) {
  let range = 1;
  let room = 1;

  while (room < N) {
    room += 6 * range;

    range += 1;
  }

  console.log(range);
}
