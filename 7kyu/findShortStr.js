// Given str find shorterst str length
// Return num

function findShort(s) {
  let words = s.split(' ')
  let shortestWord = words[0];

  for(let word of words) {
    if(word.length < shortestWord.length) {
      shortestWord = word;
      }
    }
  return shortestWord.length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))// 3
console.log(findShort("turns out random test cases are easier than writing out basic ones"))// 3)
console.log(findShort("Let's travel abroad shall we"))// 2