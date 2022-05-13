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