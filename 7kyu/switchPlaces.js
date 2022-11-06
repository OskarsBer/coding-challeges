// Make func that given str switches 'a' and 'b' places. 

const switcheroo = x => {
  let result ='';
  for(let char of x) {
    switch(char) {
      case 'a':
        result += 'b';
        break;
      case 'b':
        result += 'a';
        break;  
      default:
        result += char;
    }
  }
  return result;
}

console.log(switcheroo('abc'))// 'bac'
console.log(switcheroo('aaabcccbaaa'))// 'bbbacccabbb'
console.log(switcheroo('ccccc'))// 'ccccc'