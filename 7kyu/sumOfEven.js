// Make func that takes in sequence of nums and returns sum of the even nums.

const sumEvenNumbers = input => filterAndAddEven = input
.filter(elt => elt % 2 === 0)
.reduce((pV, cV) => pV + cV, 0);

console.log(sumEvenNumbers([1,2,3,4,5,6])) // 12
console.log(sumEvenNumbers([2,2,2])) // 6
console.log(sumEvenNumbers([0,0])) // 0
console.log(sumEvenNumbers([])) // []
