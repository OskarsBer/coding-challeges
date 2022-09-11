// Make function that takes in 2 arr and subtracts matching values
// Return arr containing unique, non-matching values in original order

function arrayDiff(a, b) {
  let newArr = [];
  for(let i = 0; i < a.length; i++) {
    if(!b.includes(a[i])) {
      newArr.push(a[i]);
    }
  }
  return newArr;
}

console.log(arrayDiff([1,2], [1]))// [2]
console.log(arrayDiff([1,2,2], [1]))// [2,2]");
console.log(arrayDiff([1,2,2], [2]))// [1]
console.log(arrayDiff([1,2,2], []))// [1,2,2]");
console.log(arrayDiff([], [1,2]))// []
console.log(arrayDiff([1,2,3], [1,2]))// [3]