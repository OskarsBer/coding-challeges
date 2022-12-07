function divisors(num) {
  if(checkIfPrime(num)) {
    return `${num} is prime`
  }

  let result = [];

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      result.push(i);
    }     
  }
  return result;
};

function checkIfPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++)
      if (num % i == 0) {
        return false;
      }
  return true;
}

console.log(divisors(15))// [3, 5]
console.log(divisors(12))// [2, 3, 4, 6]
console.log(divisors(13))// "13 is prime"