// Make func that decides and places prospective members in two categories - 'Senior' and 'Open';
// Senior req - atleast 55 years old and have a handicap greater than 7
// Handicap ranges -2 to +26 - lower = better
// Takes in array of pairs, pairs contain information for a single potential member. [age, handicap]
// Returns array of strings with membership category.

const openOrSenior = data => {
  let result = [];

  data.forEach(member => member[0] >= 55 && member[1] > 7 ? result.push('Senior') : result.push('Open'));
  
  return result;
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))//['Open', 'Senior', 'Open', 'Senior']
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]))//['Open', 'Open', 'Open', 'Open']
console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]))//['Senior', 'Open', 'Open', 'Open']