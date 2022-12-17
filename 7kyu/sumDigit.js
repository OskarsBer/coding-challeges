// Make func that sums digits of given integer

const sumDigits = num => 
    Math.abs(num)
    .toString()
    .split('')
    .reduce((acc, curr) => acc + Number(curr), 0);


console.log(sumDigits(10))// 1
console.log(sumDigits(99))// 18
console.log(sumDigits(-32))// 5