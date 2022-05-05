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



// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


// P: Empty spaces? Special characters?
// R: Returns each elt in arr squared and summed together.

function squareSum(numbers){
    if(numbers.length === 0){
        return 0;
    }
    return numbers.map(elt => elt*elt).reduce((acc, currentValue) => currentValue + acc);
}


console.log(squareSum([1,2]), 5)
console.log(squareSum([0, 3, 4, 5]), 50)
console.log(squareSum([]), 0)

// Refactored function. Removed map.

function squareSum(numbers){
    if(numbers.length === 0){
        return 0;
    }
    return numbers.reduce((acc, currentValue) => acc + currentValue * currentValue, 0);
}