const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = fs.readFileSync(filePath).toString().trim().split('');

const arr = input.map((n) => Number(n));
console.log(arr.sort((a, b) => b - a).join(''));
