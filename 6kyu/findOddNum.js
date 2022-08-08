// Given arr of nums, find num that appears an odd number of times
// Always only 1 num that will match that criteria


function findOdd(arr) {
  let result = arr.sort((a, b) => a-b);
  let count = 1;
  
  for(let i = 0; i < result.length; i++) {
    if(result[i] === result[i+1]) { 
      count++;
    }else if(count % 2 === 0) {
      count = 1;   
    }else{
      return result[i];
    }
  }
}

console.log(findOdd([1,1,-1,-1,2,2,2]))// 2
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))// 5
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))// -1
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]))// 5
console.log(findOdd([10]))// 10
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]))// 10
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]))// 1);