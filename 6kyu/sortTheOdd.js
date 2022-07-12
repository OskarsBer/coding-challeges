// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// arr of nums, sort odd nums asc, even original positions
// 

function sortArray(array) {
  let odds = [];
  // loop
  // conditional array[i] % 2 !== 0 odd
  // push to odds
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 !== 0) {
      odds.push(array[i]);
    }
  }
  // sort odds 
  odds.sort((a, b) => a - b);

  //loop through array, replace odd values with sorted odds
  for(let j = 0; j < array.length; j++) {
    if(array[j] % 2 !== 0) {
      array[j] = odds.shift();
    }
  }
  return array;
}

console.log(sortArray([5, 2, 1, 6, 3, 8, 7]))// [1, 2, 3, 6, 5, 8, 7]
