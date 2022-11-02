// Make func that determinates how many digits in num.

const digits = n => {
  const newArr = String(n).slice().split('');
  return newArr.length;
}

console.log(digits(9876543210))// 10
console.log(digits(5))// 1
console.log(digits(12345))// 5