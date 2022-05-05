// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// P: Per instructions given num will always be positive integer greater than 0.
// R: Function returns summation of every num from 1 to given num.


function summation(num) {
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum += i;
    }
    return sum;
  }


console.log(summation(1), 1);
console.log(summation(8), 36);