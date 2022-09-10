// Replace all vowels with exclamation marks

function replace(s){
  let result = [];
  for(let char of s) {
    switch(char.toLowerCase()){
      case 'a':
        result.push('!');
        break;
      case 'e':
        result.push('!');
        break;  
      case 'i':
        result.push('!');
        break;  
      case 'o':
        result.push('!');
        break;  
      case 'u':
        result.push('!');
        break;  
      default:
        result.push(char);
    }
  }
  return result.join('');
}

console.log(replace("Hi!") , "H!!")
console.log(replace("!Hi! Hi!") , "!H!! H!!")
console.log(replace("aeiou") , "!!!!!")
console.log(replace("ABCDE") , "!BCD!")