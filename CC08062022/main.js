// Task
// Sum all the numbers of a given array, except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.


function sumArray(array) {
    if(!array || array.length < 3) { 
        return 0;
    }

    return array.sort((a,b) => a-b)
    .slice(1,-1)
    .reduce((acc, c) => acc + c, 0);  
}       


console.log( sumArray(null)                     , 0 );
console.log( sumArray([ ])                      , 0 );
console.log( sumArray([ 3 ])                    , 0 );
console.log( sumArray([ 3, 5 ])                 , 0 );
console.log( sumArray([ 6, 2, 1, 8, 10 ])       , 16 );
console.log( sumArray([ 0, 1, 6, 10, 10 ])      , 17 );
console.log( sumArray([ -6, -20, -1, -10, -12 ]), -28 );
console.log( sumArray([ -6, 20, -1, 10, -12 ])  , 3 );


// CC2

// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null.

// The array will always have at least 2 elements and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!


function firstNonConsecutive (arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i+1] == undefined) {
            return null;
        }else if(arr[i] + 1 != arr[i+1]) {
            return arr[i+1];
        }
    }
}


console.log(firstNonConsecutive([1,2,3,4,6,7,8]), 6)


// CC3

// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.


function getGrade (s1, s2, s3) {
    let result = (s1+s2+s3)/3;
    if(result < 60) {
        return 'F'
    }else if(result < 70) {
        return 'D'
    }else if(result < 80) {
        return 'C'
    }else if(result < 90) {
        return 'B'
    }else if(result <= 100) {
        return 'A'
    }
}


console.log(getGrade(95,90,93), 'A')
console.log(getGrade(82,85,87), 'B')
console.log(getGrade(75,70,79), 'C')
console.log(getGrade(66,62,68), 'D')


// CC4

