const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
const input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

function solution(input) {
  const strObj = {};

  for (let str of input.toLowerCase()) {
    strObj[str] = strObj[str] ? (strObj[str] += 1) : 1;
  }

  const maxNum = Math.max(...Object.values(strObj));
  let maxStr = '';
  let count = 0;

  for (let str in strObj) {
    if (strObj[str] === maxNum) {
      maxStr = str;
      count += 1;
    }
    if (count > 1) {
      return console.log('?');
    }
  }

  console.log(maxStr.toUpperCase());
}
