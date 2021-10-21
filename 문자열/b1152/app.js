const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ');

solution(input);

function solution(input) {
  if (input[0] === '') {
    return console.log(0);
  }
  console.log(input.length);
}
