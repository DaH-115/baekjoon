const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input.shift();
const arr = input.map((c) => c.split(' ').map((n) => Number(n)));

let results = '';

arr
  .sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  })
  .forEach((c) => {
    results += `${c[0]} ${c[1]}\n`;
  });

console.log(results);
