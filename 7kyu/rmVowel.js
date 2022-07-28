// remove vowels

function disemvowel(str) {
  let result = '';
  let vowels = ['a','e','i','o','u'];

  for(let i = 0; i < str.length; i++) {
    if(!vowels.includes(str[i].toLowerCase())) {
      result += str[i];
    }
  }
  return result;
}

console.log(disemvowel("This website is for losers LOL!"))// "Ths wbst s fr lsrs LL!"
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))// "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
console.log(disemvowel("What are you, a communist?"))// "Wht r y,  cmmnst?"