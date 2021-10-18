const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
const input = fs.readFileSync(filePath).toString().split('\n');

const line = input.shift();

solution(line, input);

function solution(line, input) {
  for (let i = 0; i < line; i++) {
    let result = '';
    const [num, str] = input[i].split(' ');

    for (let j = 0; j < str.length; j++) {
      for (let k = 0; k < num; k++) {
        console.log('str[j]: ', str[j]);
        result += str[j];
      }
    }
    console.log(result);
  }
}
