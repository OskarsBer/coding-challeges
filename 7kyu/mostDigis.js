// Make func that finds num with most digits

findLongest = arr => arr.sort((a,b) => (b+'').length - (a+'').length)[0]

console.log(findLongest([1, 10, 100]))// 100
console.log(findLongest([9000, 8, 800]))// 9000
console.log(findLongest([8, 900, 500]))// 900