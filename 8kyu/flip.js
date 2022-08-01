// Flip to R or L
// Arr of nums

const flip = (d, a) => d === "R" ? a.sort((a, b) => a-b) : a.sort((a,b) => b-a);


console.log(flip('R', [3, 2, 1, 2]))// [1, 2, 2, 3]
console.log(flip('L', [1, 4, 5, 3, 5]))// [5, 5, 4, 3, 1]