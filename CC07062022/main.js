// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.


const quarterOf = (month) => {
    if(month <= 0 || month > 12){
        return `invalid input`
    }else if(month <= 3) {
        return 1;
    }else if(month <= 6) {
        return 2;
    }else if(month <= 9) {
        return 3;
    }else if(month <= 12) {
        return 4;
    }
}


console.log(quarterOf(3), 1)
console.log(quarterOf(8), 3)
console.log(quarterOf(11), 4)
console.log(quarterOf(0))


// CC2

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


// function sumMix(x){
//     return x.reduce((acc, c) => acc + Number(c), 0);
// }

const sumMix = x => x.reduce((acc, c) => acc + Number(c), 0);

console.log(sumMix([1,"2","3"]), 6)
console.log(sumMix(["0","2","3"]), 5)
console.log(sumMix([3,"3",3]), 9)


// CC3

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


// function removeExclamationMarks(s) {
//     return s.split("!").join("");
// }

const removeExclamationMarks = s => s.split("!").join("");


console.log(removeExclamationMarks("Hello World!"), "Hello World");


// CC4

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle


const otherAngle = (a, b) => 180-(a+b);


console.log(otherAngle(20, 80), 80);
console.log(otherAngle(40, 75), 65);
console.log(otherAngle(45, 45), 90);
console.log(otherAngle(70, 70), 40);