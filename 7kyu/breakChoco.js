// Make func that breaks chocolate into squares 1x1, return min num of breaks neaded given 2 nums.

const breakChocolate = (n, m) => n*m-1 > 1 ? n*m-1 : 0;

console.log(breakChocolate(5, 5))//  24
console.log(breakChocolate(4, 4))//  15
console.log(breakChocolate(2, 3))//  5
console.log(breakChocolate(1, 1))//  0