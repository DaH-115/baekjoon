const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

const lines = [];

printStars(Number(input[0]));
console.log(lines.join(''));

function printStars(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      star(i, j, num);
    }
    lines.push('\n');
  }
}

function star(i, j, num) {
  if (i % 3 === 1 && j % 3 === 1) {
    lines.push(' ');
  } else {
    if (num === 1) {
      lines.push('*');
    } else {
      console.log(Math.floor(i / 3), Math.floor(j / 3), Math.floor(num / 3));
      star(Math.floor(i / 3), Math.floor(j / 3), Math.floor(num / 3));
    }
  }
}
