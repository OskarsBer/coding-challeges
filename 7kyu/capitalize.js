// Make func that capitalizes letters of even and odd indexes separately.
// Return arr with both variants.

function capitalize(s){
  let even = ''; 
  let odd = ''; 

  for(let i = 0; i < s.length; i++) {
    if(i % 2 === 0) {
      even += s[i].toUpperCase();
      odd += s[i];
    }else{
      even += s[i];
      odd += s[i].toUpperCase();
    }  
  }
  return [even, odd];
};

console.log(capitalize("abcdef"))// ['AbCdEf', 'aBcDeF']
console.log(capitalize("codewars"))// ['CoDeWaRs', 'cOdEwArS']
console.log(capitalize("abracadabra"))// ['AbRaCaDaBrA', 'aBrAcAdAbRa']
console.log(capitalize("codewarriors"))// ['CoDeWaRrIoRs', 'cOdEwArRiOrS']
