// Essentially, rearrange the digits to create the highest possible number.

const descendingOrder = n => { 
  let result = String(n)
  .split('')
  .sort((a, b) => b-a)
  .join('');
  return +result;
}

console.log(descendingOrder(0))// 0
console.log(descendingOrder(1))// 1
console.log(descendingOrder(111))// 111
console.log(descendingOrder(15))// 51
console.log(descendingOrder(1021))// 2110
console.log(descendingOrder(123456789))// 987654321