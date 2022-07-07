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

function sortLetters(str) {
    return str.split('').sort().join('');
}

console.log(sortLetters('asdfghjklzxcvbnmasdfghjkl'))

//5 Write function to check two given numbers and return true if one of the number is 50 or if their sum is 50.

// function testNums(num1, num2) {
//     if(num1 === 50 || num2 === 50 || num1 + num2 === 50) {
//         return true;
//     }else{
//         return false;
//     }

// }

const testNums = (num1, num2) => num1 === 50 || num2 === 50 || num1 + num2 === 50;

console.log(testNums(50, 2));
console.log(testNums(25, 25));
console.log(testNums(10, 20));
console.log(testNums(30, 30));


// 6 Write function to sum of three elements of a given array of integers of length 3.

function sumElements(arr) {
    return arr.reduce((acc, c) => acc + c, 0);
}

console.log(sumElements([1,2,3]));//6
console.log(sumElements([10,20,3]));//33
console.log(sumElements([-1,-2,-3]));//-6


//7 Write function to sum of 2 given integers. If 2 values are same, then returns triple their sum.

// function sumTwoIntegers(num1, num2) {
//     if(num1 === num2) {
//         return (num1 + num2) * 3;
//     }else{
//         return num1 + num2;
//     }
// }

const sumTwoIntegers = (num1, num2) => num1 === num2 ? (num1 + num2) * 3 : num1 + num2;

console.log(sumTwoIntegers(1,2));//3
console.log(sumTwoIntegers(2,2));//12


//8 Write function to create a new query - taking the first and the last element
// from a given arr of integers and length must be greater or equal to 1.

function newQuery(arr) {
    let newArr = [];
    
    if(arr.length < 1) {
        return "Array too short!";
    }else{
        newArr.push(arr[0]);
        newArr.push(arr[arr.length-1]);
    }
    return newArr;
}

console.log(newQuery([1,2,3,4,5,6]));//[1,6]
console.log(newQuery([]));//Array too short


//9 Write function to find the number of elements which presents in both of the given arrays.

function arrElementCount(arr1, arr2) {
    let arr1Count = 0;
    let arr2Count = 0;

    for(let i = 0; i < arr1.length; i++) {
        arr1Count++;       
    }

    for(let i = 0; i < arr2.length; i++) {
        arr2Count++;
    } 

    return arr1Count + arr2Count;
}

console.log(arrElementCount([1,2,3],[1,2,3,4,5,6]));//9
console.log(arrElementCount([1,2,3,4,5,6],[1,2,3,4,5,6]));//12
console.log(arrElementCount([1],[1]));//2
console.log(arrElementCount([],[1]));//1
console.log(arrElementCount([],[]));//0