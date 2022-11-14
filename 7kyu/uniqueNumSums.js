// Make func that takes in arr of nums and returns only unique nums summed.

const uniqueSum = lst => [...new Set(lst)].reduce((acc, curr) => acc + curr, null);

console.log(uniqueSum([1,2,3]))// 6)
console.log(uniqueSum([1,3,8,1,8]))// 12)
console.log(uniqueSum([-1,-1,5,2,-7]))// -1)
console.log(uniqueSum([]))// null)