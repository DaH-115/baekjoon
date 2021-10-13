const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
const input = fs.readFileSync(filePath).toString().split('\n');

for (let i = 0; i < input.length; i++) {
  if (input[i] === '') {
    break;
  }
  const [A, B] = input[i].split(' ').map((i) => parseInt(i));

  solution(A, B);

  function solution(A, B) {
    while (true) {
      return console.log(A + B);
    }
  }
}
