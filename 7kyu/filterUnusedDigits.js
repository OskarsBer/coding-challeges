// Make function that take in varying number of integer arguments and returns string with digits that are not used in arguments.
//Return unused arguments as sorted string.

// [1, 23, 45, 67] => '089'

function unusedDigits(...args) {
  let usedDigits = args.join('').split('').sort();
  let digits = ['0','1','2','3','4','5','6','7','8','9'];

  for(let i = 0; i < usedDigits.length; i++) {
    if(digits.includes(usedDigits[i])) {
      digits.splice((digits.indexOf(usedDigits[i])), 1);
    }
  }
  return digits.join('');
}

console.log(unusedDigits(1, 23, 45, 67)) // '089'
console.log(unusedDigits(2015, 8, 26)) // '3479'
