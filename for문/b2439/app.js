const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
const input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(N) {
  for (let line = 1; line <= N; line++) {
    const star = line;
    const space = N - line;
    let stars = '';

    for (let i = 0; i < space; i++) {
      stars += ' ';
    }
    for (let i = 0; i < star; i++) {
      stars += '*';
    }

    console.log(stars);
  }
}
