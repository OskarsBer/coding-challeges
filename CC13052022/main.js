// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.


function booleanToString(b){
    return b ? "true" : "false"
}



console.log(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
console.log(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');


// #2

// You need to double the integer and return it.


function doubleInteger(i) {
    return i * 2;
}


console.log(doubleInteger(2), 4);
console.log(doubleInteger(3), 6);
console.log(doubleInteger(4), 8);


// #3

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// P: Create function that takes in 3 parameters. Calculates time passed since midnight. Returns it in milliseconds.


function past(h, m, s){
    return (h*3600000) + (m*60000) + (s*1000);
}


console.log(past(0,1,1),61000)
console.log(past(1,1,1),3661000)
console.log(past(0,0,0),0)
console.log(past(1,0,1),3601000)
console.log(past(1,0,0),3600000)