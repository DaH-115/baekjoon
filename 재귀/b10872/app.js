const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

function factorial(num) {
  if (num <= 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

console.log(factorial(input[0]));
