// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7


var stringToNumber = function(str){
    return Number(str)
}


  console.log(stringToNumber("1234"),1234)
  console.log(stringToNumber("605"), 605)
  console.log(stringToNumber("1405"),1405)
  console.log(stringToNumber("-7"),  -7)


  // #2


//   Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// P: Take year and convert it to century.
// P: Make function that takes in num (year). Using formula convert given number to century. Return result.


function century(year) {
    let result;

    if(year <= 100){
        result = 1;
    }else if(year % 100 === 0){
        result = year / 100;
    }else{
        result = year / 100 + 1;
    }
    return Math.floor(result); 
}

// simple solution using Math.ceil

function century(year) {
    return Math.ceil(year/100)
}


  console.log(century(1705), 18, 'Testing for year 1705');
  console.log(century(1900), 19, 'Testing for year 1900');
  console.log(century(1601), 17, 'Testing for year 1601');
  console.log(century(2000), 20, 'Testing for year 2000');
  console.log(century(89), 1, 'Testing for year 89');


  // #3


//   Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// P: Make function take takes in 3 parameters. According to first parameter calculate and return result.


function basicOp(operation, value1, value2) {
    let result;

    if(operation === '+'){
        result = value1 + value2;
    }else if(operation === '-'){
        result = value1 - value2;
    }else if(operation === '*'){
        result = value1 * value2;
    }else if(operation === '/'){
        result = value1 / value2;
    }
    return result;
}


console.log(basicOp('+', 4, 7), 11);
console.log(basicOp('-', 15, 18), -3);
console.log(basicOp('*', 5, 5), 25);
console.log(basicOp('/', 49, 7), 7);


// #4

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name){
    return `Hello, ${name} how are you doing today?`
  }


console.log(greet("Ryan"), "Hello, Ryan how are you doing today?");
console.log(greet("Shingles"), "Hello, Shingles how are you doing today?");