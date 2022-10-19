// Make func that creates masking effect, covering all characters (with '#') in string except 4 last ones.
// Return masked str

function maskify(str) {
  let maskedStr = '';
  if(str.length <= 4) {
    return str;
  }
  for(let i = 0; i < str.length; i++ ) {
    if(i < str.length-4) {
      maskedStr += '#';
    }else{
      maskedStr += str[i];
    }
  }
  return maskedStr;
}

console.log(maskify('1234567890')) // ######7890
console.log(maskify('1')) // 1
console.log(maskify('12345!')) // ##345!