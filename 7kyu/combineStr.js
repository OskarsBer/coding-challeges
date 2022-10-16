// Make func that takes in two str containing only letters a-z. 
// Return new sorted str, non repeating letters from both str.

const longest = (s1, s2) => {
  const combinedStr = [...s1, ...s2].sort();
  let result = '';
  for(let letter of combinedStr) {
    if(!result.includes(letter)) {
      result += letter;
    }
  }
  return result;
}

console.log(longest("fbc", "aef"))// "abcef"
console.log(longest("aretheyhere", "yestheyarehere"))// "aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))// "abcdefghilnoprstu"
console.log(longest("inmanylanguages", "theresapairoffunctions"))// "acefghilmnoprstuy"
