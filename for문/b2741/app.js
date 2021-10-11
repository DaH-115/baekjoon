const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
const input = fs.readFileSync(filePath).toString().split('\n');

// NOTE: 시간 초과. 다른 방법도 써봤지만 자바스크립트 문제인 것 같다
parseInt(input);

for (let i = 1; i <= parseInt(input); i++) {
  console.log(i);
}
