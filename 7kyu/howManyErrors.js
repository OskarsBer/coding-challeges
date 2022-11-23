// Make function that takes in string of letters and count how many of letters are in range of a-m.
// Returns how many of letter are outside of a-m and total count.

// const printerError = s => {
//   let errorCount = 0;

//   for(let char of s) {
//     if(!char.match(/[a-m]/)) {
//       errorCount++;
//     }
//   }
//   return `${errorCount}/${s.length}`
// }

const printerError = s => {
  let errorCount = s.split('').reduce((err, char) => {
  return (!char.match(/[a-m]/) ? ++err : err) }, 0);

  return `${errorCount}/${s.length}`;
}

console.log(printerError('aaabbbxxx')) //'3/9'
console.log(printerError('aaabbbxxxaaabbbccc')) //'3/18'
console.log(printerError('aaa')) //'0/3'