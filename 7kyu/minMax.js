// Find min max

const minMax = arr => {
  const min = arr.reduce((acc, curr) => acc > curr ? acc = curr : acc, arr[0]);

  const max = arr.reduce((acc, curr) => acc < curr ? acc = curr : acc, arr[0]);

  return [min, max]; 
}

// function minMax(arr){
//   let min = arr[0];
//   let max = arr[0];

//   for (let value of arr) {
//     if (value < min) {
//       min = value;
//     }
//   }

//   for (let value of arr) {
//     if (value > max) {
//       max = value;
//     }
//   }

//   return [min, max]; 
// }

console.log(minMax([1, 2, 3, 4, 5]))//[1, 5]
console.log(minMax([2334454, 5]))//[5, 2334454]
console.log(minMax([5]))//[5, 5]