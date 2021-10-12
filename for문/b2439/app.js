const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
const input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(N) {
  for (let i = 1; i <= N; i++) {
    let stars = ' ';
    const star = i;
    const space = N - i;

    for (let j = 1; j <= space; j++) {
      stars += ' ';
    }
    for (let j = 1; j <= star; j++) {
      stars += '*';
    }
    console.log(stars);
  }
}
