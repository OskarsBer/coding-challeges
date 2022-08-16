// create func that accepts arr and a num
// returns arr of the first num elements from arr

// function take(arr, n) {
//   return arr.slice(0,3);
// }

const take = (arr, n) => arr.slice(0, n);

console.log(take([0, 1, 2, 3, 5, 8, 13], 3))// [0, 1, 2]