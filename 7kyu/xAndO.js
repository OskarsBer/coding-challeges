// Make func that checks ir str has same amount of x and o
// Return boolean, case insensitive

// ("ooxx") => true

function XO(str) {
  let xCount = 0;
  let oCount = 0;
  
  for (let char of str) {
    if (char.toLowerCase() === 'x') {
      xCount++;
    } else if (char.toLowerCase() === 'o') {
      oCount++;
    }
  }
  if (xCount === oCount) {
    return true;
  } else {
    return false;
  }
}

console.log(XO('xo'))//true
console.log(XO("xxOo"))//true
console.log(XO("xxxm"))//false
console.log(XO("Oo"))//false
console.log(XO("ooom"))//false