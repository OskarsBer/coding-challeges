// Make func that takes in arr and determines if sum of all integers in arr is odd/even.
// Return string - 'odd' or 'even'

const oddOrEven = array => {
  let arrSum = array.reduce((acc, cur) => acc + cur, 0);
  
  return arrSum % 2 === 0 ? 'even' : 'odd';
}

console.log(oddOrEven([0]))// 'even'
console.log(oddOrEven([1]))// 'odd'
console.log(oddOrEven([]))// 'even'

console.log(oddOrEven([0, 1, 5]))// 'even'
console.log(oddOrEven([0, 1, 3]))// 'even'
console.log(oddOrEven([1023, 1, 2]))// 'even'

console.log(oddOrEven([0, -1, -5]))// 'even'
console.log(oddOrEven([0, -1, -3]))// 'even'
console.log(oddOrEven([-1023, 1, -2]))// 'even'