// Make func that return sum of given series up to nth num. Param isnatural num.
// Return result as string.

const SeriesSum = n => {
  let result = 1;
  if (n === 0) {
    return '0.00';
  } else {
    for (let i = 4; i <= (n * 3); i += 3) {
      result += 1 / i;
    }
  }
  return result.toFixed(2).toString();
}

console.log(SeriesSum(1))// "1.00"
console.log(SeriesSum(2))// "1.25"
console.log(SeriesSum(3))// "1.39"
console.log(SeriesSum(4))// "1.49"