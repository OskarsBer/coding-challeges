const stray = arr => {
  const newArr = arr.sort();

  return newArr[0] != newArr[1] ? newArr[0] : newArr[newArr.length-1];
}

console.log(stray([1, 1, 2]))// 2
console.log(stray([1, 2, 1]))// 2
console.log(stray([2, 1, 1]))// 2