// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// P: Calculate average from given array.
// Compare. Return true if you have more points.


function betterThanAverage(classPoints, yourPoints) {
    let sumPoints = classPoints.reduce((acc, pv) => acc + pv, yourPoints);
    let avgPoints = sumPoints / (classPoints.length + 1);    
    return yourPoints > avgPoints;
}
  


console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), "should return True")
  
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), "should return False")

console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50), "should return False")
  
console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21), "should return False")


// CC2


// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// P: Make function that takes in number. With modulo check if number is even or odd.
// Arrow function returns true or false. Using ternary operator multiply number accordingly and return answer.  


const simpleMultiplication = number => number % 2 === 0 ? number*8 : number*9;


console.log(simpleMultiplication(2), 16);
console.log(simpleMultiplication(3), 27);
console.log(simpleMultiplication(6), 48);


// CC3


// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'


const smash = words => words.join(' ');


console.log(smash(['hello', 'world', 'this', 'is', 'great']));
