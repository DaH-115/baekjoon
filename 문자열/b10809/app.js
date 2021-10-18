const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
const input = fs.readFileSync(filePath).toString().split('\n');

const s = input[0];

solution(s);

function solution(s) {
  let result = [];

  for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
    let str = String.fromCharCode(i);
    result.push(s.indexOf(str));
  }

  console.log(result.join(' '));
}
