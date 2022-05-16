// Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
  return str.toUpperCase();
}

console.log(makeUpperCase("hello"), "HELLO");

// #2

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!

// P: Make function that take in two parameters. Calculate and return result. Check for less than zero values.


function paperwork(n, m) {
  if(n < 0 || m < 0){
    return 0;
  }
    return n * m;
}


console.log(paperwork(5,5), 25, 'Failed at paperwork(5, 5)');
console.log(paperwork(5,-5), 0, 'Failed at paperwork(5, -5)');
console.log(paperwork(-5,-5), 0, 'Failed at paperwork(-5, -5)');
console.log(paperwork(-5,5), 0, 'Failed at paperwork(-5, 5)');
console.log(paperwork(5,0), 0, 'Failed at paperwork(5, 0)');