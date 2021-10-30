const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

function fibonacci(num) {
  if (num == 0) return 0;
  else if (num == 1) return 1;
  else return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(input[0]));
