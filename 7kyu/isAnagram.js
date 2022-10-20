// Make func that 'detects' anagrams, given 2 words check if one is anagram of another.
// Return boolean

const isAnagram = (test, original) => {
  const testCopy = test.toLowerCase().split('').sort().join('');
  const originalCopy = original.toLowerCase().split('').sort().join('');

  return testCopy === originalCopy;
}

// let isAnagram = function(test, original) {
//   let originalCopy = original.toLowerCase().split('');

//   if(test.length !== original.length) {
//     return false;
//   }
//   for(let i = 0; i < test.length; i++) {
//     if (original.toLowerCase().indexOf(test[i].toLowerCase()) === -1) {
//       return false;
//     }else{
//       let char = test[i].toLowerCase();
//       originalCopy.splice(originalCopy.indexOf(char), 1);
//     }
//   }
//   if(!originalCopy.length === 0) {
//     return false;
//   }else{
//     return true;
//   }
// };

console.log(isAnagram('creative', 'reactive')) // true
console.log(isAnagram('listen', 'silent')) // true
console.log(isAnagram('death', 'hated')) // true
console.log(isAnagram('admirer', 'married')) // true

console.log(isAnagram('word', 'boar')) // false
console.log(isAnagram('paste', 'smoke')) // false