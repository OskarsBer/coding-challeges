// Make func that converts str of '1' and '0' - conver equivalent binary value to num.
// Return resulting num

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

console.log(binaryArrayToNumber([0,0,0,1]))// 1
console.log(binaryArrayToNumber([0,0,1,0]))// 2
console.log(binaryArrayToNumber([1,1,1,1]))// 15
console.log(binaryArrayToNumber([0,1,1,0]))// 6