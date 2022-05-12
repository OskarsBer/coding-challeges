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
    return Math.floor(result); // Math.floor instead of Math.round because of large nums
}


  console.log(century(1705), 18, 'Testing for year 1705');
  console.log(century(1900), 19, 'Testing for year 1900');
  console.log(century(1601), 17, 'Testing for year 1601');
  console.log(century(2000), 20, 'Testing for year 2000');
  console.log(century(89), 1, 'Testing for year 89');