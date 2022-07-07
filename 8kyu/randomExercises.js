//1 Get the extension of a file name.


function getFileExtension(file) {
    let result = file.split('.');
    return result[1];
}

console.log(getFileExtension('script.js'))


//2 Write function to create a new string without the first and last character of a given string.

function removeFirstAndLastChar(str) {
    return str.slice(1,-1);
}

console.log(removeFirstAndLastChar('Hello world'))
console.log(removeFirstAndLastChar('Yo'))


//3 Write function to reverse a given string.

// function reverseStr(str) {
//     return str.split('').reverse().join('');
// }

function reverseStr(str) {
    let result = '';
    for(let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result;
}

console.log(reverseStr('I love javascript'))


//4 Write function to sort the letters of a given string in alphabetical order.


//5 whrite a js program to check two given nummbers and 
//return true if one of the number is 50 or if their sum is 50.

// 6 whrite a js program to complite the sum of
// three elements of a given array of integers of length 3.

//7 whrite a js program to compute the sum of the two given integers. 
//If the two values are same, then returns triple their sum.

//8 Write a js program to create a newqrry taking the first and last element
// from a given arry of integers and length must be greater or equal to 1.

//9 Write a js program to find the number of elements which presents in both of the given arrays.
