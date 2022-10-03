// Make func that removes smallest value num. If multiple, remove one with smallest index. Do not mutate arr.

function removeSmallest(numbers) {
  let newArr = numbers.slice();
  let minValIndex = 0;
  if(newArr) {
    for(let i = 0; i < newArr.length; i++) {
      if(newArr[i] < newArr[minValIndex]) {
        minValIndex = i;
      }
    }
  }else{
    return [];
  }
  newArr.splice(minValIndex, 1);
  return newArr;
}

console.log(removeSmallest([1, 2, 3, 4, 5]))// [2, 3, 4, 5]
console.log(removeSmallest([5, 3, 2, 1, 4]))// [5, 3, 2, 4]
console.log(removeSmallest([2, 2, 1, 2, 1]))// [2, 2, 2, 1]
console.log(removeSmallest([]))// []