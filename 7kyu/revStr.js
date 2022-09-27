// Make func to reverse str

function reverseWords(str) {
  let newStr = [];
  for (let i = str.length-1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr.split(' ').reverse().join(' ');
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))// 'ehT kciuq nworb xof spmuj revo eht yzal .god'
console.log(reverseWords('apple'))// 'elppa'
console.log(reverseWords('a b c d'))// 'a b c d'
console.log(reverseWords('double  spaced  words'))// 'elbuod  decaps  sdrow'