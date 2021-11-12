const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();
input.map((e) => Number(e));
const result = input.sort((a, b) => a - b);
console.log(result.join('\n'));
