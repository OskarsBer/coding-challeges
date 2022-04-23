// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    let result = marks.reduce(
        (pV, cV) => pV + cV, 0);
    return Math.floor(result / marks.length);
}

getAverage([2.5,2,2,2]);
getAverage([1,2,3,4,5,]);
getAverage([1,1,1,1.8,1,1,1,2]);
getAverage([1,3,6,1,8,1,9,2]);


// // Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string


// P: Never empty string. Always digits.
// R: Replace digits in given string with 1's and 0's and return resulting string.

// P: Write function that takes in string of digits.
// Make loop that goes through every string character and replace them with coresponding 1's and 0's. Return resulting string.


function fakeBin(x){
    let result ='';
    for(let i = 0; i < x.length; i++){
        if(Number(x[i]) < 5){ // unnecessary parsing to Number as >= does not compare types
            result += '0'
        }else{
            result += '1'
        }
    }
    return result;
}

console.log(fakeBin('45385593107843568'), '01011110001100111');
console.log(fakeBin('509321967506747'), '101000111101101');
console.log(fakeBin('366058562030849490134388085'), '011011110000101010000011011');

