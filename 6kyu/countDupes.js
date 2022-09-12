// Make func that counts how many reaccuring characters in str, case insensitive
// Return num of reoccuring chars

function duplicateCount(str){
  let count = 0;
  let dupes = [];
  let newStr = str.toLowerCase().split('').sort();

  for(let i = 0; i < newStr.length; i++) {
    if(newStr[i] === newStr[i+1] && !dupes.includes(newStr[i])) {
      dupes.push(newStr[i]);
      count++;
    }
  }
  return count;
}

console.log(duplicateCount(""))// 0
console.log(duplicateCount("abcde"))// 0
console.log(duplicateCount("aabbcde"))// 2
console.log(duplicateCount("aabBcde"))// 2
console.log(duplicateCount("Indivisibility"))// 1
console.log(duplicateCount("Indivisibilities"))// 2