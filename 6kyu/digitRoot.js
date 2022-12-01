// Make function that takes in num and returns sum of digits (of that given num) till the result is only one digit long. 

// Ex. 12 => 1 + 2 = 3; 
// 999 => 9 + 9 + 9 = 27 => 2 + 7 => 9

function digitalRoot(n) {
  let sum = n;
  let sumLength = sum.toString().split('').length;

  while (sumLength > 1) {
      sum = sum.toString().split('').reduce((acc, cur) => acc + (+cur), 0);
      sumLength = sum.toString().split('').length;
  }
    return sum;
}

console.log( digitalRoot(16))//7
console.log( digitalRoot(456))// 6