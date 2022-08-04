// Given an integral number, determine if it's a square number

// function isSquare(n) {
//   let sqr = Math.floor(Math.sqrt(n));
//   if(sqr**2 === n) {
//     return true;
//   }else{
//     return false;
//   }
// }

const isSquare = n => Math.floor(Math.sqrt(n))**2 === n;


console.log(isSquare(-1))// false, "-1: Negative numbers cannot be square numbers
console.log(isSquare(0))// true, "0 is a square number
console.log(isSquare(3))// false, "3 is not a square number
console.log(isSquare(4))// true, "4 is a square number
console.log(isSquare(25))// true, "25 is a square number
console.log(isSquare(26))// false, "26 is not a square 
