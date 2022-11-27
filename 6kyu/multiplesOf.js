// Make function that takes in number, then finds all multiples of 3 and 5 that are below passed in number and sums them up.
// If number is multiple of 3 and 5, count it only once.
// If number is negative return 0.
// Return summed number.

function solution(number){
  let result = 0;

  for(let i = 0; i < number; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }
  return result;
}

console.log(solution(10)) // 23;
