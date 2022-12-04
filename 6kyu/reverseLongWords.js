// Make func that takes in str of one or more words and returns all five or more letter words reversed.

const spinWords = s => {
  let result = [];

  s.split(' ').map(word =>
      word.length >= 5 ?
      result.push(word.split('').reverse().join('')) :
      result.push(word));
  
  return result.join(' ');
}

// function spinWords(s){
//   // make new arr for return str
//   let result = [];
//   // split s str into words
//   let newArr = s.split(' ');
//   // loop through s and push word to result arr
//   // check & reverse 5> char length words
//   for (let word of newArr) {
//     if (word.length >= 5) {
//       result.push(word.split('').reverse().join(''));
//     } else {
//       result.push(word);
//     }
//   }
//   return result.join(' ');
// }

console.log(spinWords( "Hey fellow warriors" ))// "Hey wollef sroirraw" 
console.log(spinWords( "This is a test"))// "This is a test" 
console.log(spinWords( "This is another test" ))// "This is rehtona test"