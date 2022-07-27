// take non-negative num
// convert to binary

// function toBinary(num){
//   return Number(parseInt(num).toString(2));
// }

const toBinary = num => Number(num.toString(2));

console.log(toBinary(1))// 1
console.log(toBinary(2))// 10
console.log(toBinary(3))// 11
console.log(toBinary(5))// 101  