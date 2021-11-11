const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

const N = Number(input[0]);
let num = 666;
let count = 1;

while (count !== N) {
  num++;

  if (String(num).includes('666')) count++;
}

console.log(num);
