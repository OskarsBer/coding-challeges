// Takes in two nums
// Returns remainder when dividing larger num by smaller num

// function remainder(n, m){
//   return n>m ? n%m : m%n;
// }

const remainder = (n, m) => n>m ? n%m : m%n;

console.log(remainder(17,5))// 2
console.log(remainder(13, 72))//7
console.log(remainder(1, 0))// NaN
console.log(remainder(0, 0))// NaN