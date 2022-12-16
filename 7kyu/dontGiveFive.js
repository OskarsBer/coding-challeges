// Make func that counts how many nums in given range except nums with '5'.

function dontGiveMeFive(start, end) {
  let total = 0;
  for (let i = start; i <= end; i++) {
    if (!String(i).includes(5)) {
      total++;
    }
  }
  return total;
}

console.log(dontGiveMeFive(1,9))// 8
console.log(dontGiveMeFive(4,17))// 12