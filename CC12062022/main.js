// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting


// function enough(cap, on, wait) {
//     if(cap - on - wait < 0) {
//         return Math.abs(cap - on - wait);
//     }else{
//         return 0;
//     }
// }

const enough = (cap, on, wait) => cap - on - wait < 0 ? Math.abs(cap - on - wait) : 0;


console.log(enough(10, 5, 5), 0);
console.log(enough(100, 60, 50), 10);
console.log(enough(20, 5, 5), 0);


// CC2

var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;


// CC3

// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.


function switchItUp(number){
    switch (number) {
        case 1:
            return "One";
        case 2:
            return "Two";
        case 3:
            return "Three";
        case 4:
            return "Four";
        case 5:
            return "Five";
        case 6:
            return "Six";
        case 7:
            return "Seven";
        case 8:
            return "Eight";
        case 9:
            return "Nine";    
        case 0:
            return "Zero";    
    }
}


console.log(switchItUp(1),"One");
console.log(switchItUp(3),"Three");
console.log(switchItUp(5),"Five");


// CC4

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!


function removeEveryOther(arr){
    let result = [];
    for(let i = 0; i < arr.length; i+=2) {
        result.push(arr[i]);
    }
    return result;
}


console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]), [[1, 2]]);
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);


// CC5

// Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
// Consider an Example :
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// Notes
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.


// function expressionMatter(a, b, c) {
//     let val1 = a*b*c;
//     let val2 = a*(b+c);
//     let val3 = (a+b)*c;
//     let val4 = a+b*c;
//     let val5 = a*b+c;
//     let val6 = a+b+c;

//     if(val1 > val2) {
//         if(val1 >= val3) {
//             return val1;
//         }else if(val3 >= val4) {
//             return val3;
//         }else if(val4 >= val5) {
//             return val4;
//         }else if(val5 >= val6) {
//             return val5;
//         }else{
//             return val6;
//         }        
//     }else if(val1 <= val2) {
//         if(val2 > val3) {
//             return val2;
//         }else if(val3 > val4) {
//             return val3;
//         }else if(val4 > val5) {
//             return val4;
//         }else if(val5 > val6) {
//             return val5;
//         }else{
//             return val6;
//         }
//     }
// }

// lol

const expressionMatter = (a, b, c) => Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c));


console.log(expressionMatter(2, 1, 2), 6);
console.log(expressionMatter(2, 1, 1), 4);
console.log(expressionMatter(1, 1, 1), 3);
console.log(expressionMatter(1, 2, 3), 9);
console.log(expressionMatter(1, 3, 1), 5);
console.log(expressionMatter(2, 2, 2), 8);

console.log(expressionMatter(5, 1, 3), 20);
console.log(expressionMatter(3, 5, 7), 105);
console.log(expressionMatter(5, 6, 1), 35);
console.log(expressionMatter(1, 6, 1), 8);
console.log(expressionMatter(2, 6, 1), 14);
console.log(expressionMatter(6, 7, 1), 48);

console.log(expressionMatter(2, 10, 3), 60);
console.log(expressionMatter(1, 8, 3), 27);
console.log(expressionMatter(9, 7, 2), 126);
console.log(expressionMatter(1, 1, 10), 20);
console.log(expressionMatter(9, 1, 1), 18);
console.log(expressionMatter(10, 5, 6), 300);
console.log(expressionMatter(1, 10, 1), 12);