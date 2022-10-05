// Make func that converts two summed nums / converts to binary equivalent.

function addBinary(a,b) {
  const sum = a + b;
  return sum.toString(2);
}

console.log(addBinary(1,1)) // 10