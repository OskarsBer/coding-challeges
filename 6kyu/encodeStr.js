// Make func that 'encodes' str. If char appears once '(' or if char appears more than once ')'. Ignores capitalization.
// Returns 'encoded' str

function duplicateEncode(word){
  let result = [...word.toLowerCase()].map((c1,i1,a) => a.some((c2,i2) => c1 === c2 && i1 != i2) ? ')' : '('); 
  return result.join('');
}

console.log(duplicateEncode("din"))// "((("
console.log(duplicateEncode("recede"))// "()()()"
console.log(duplicateEncode("Success"))// ")())())"
console.log(duplicateEncode("(( @"))// "))(("