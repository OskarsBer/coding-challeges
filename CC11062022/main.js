// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true


// function setAlarm(employed, vacation){
//     if(employed === true && vacation === false){
//         return true;
//     }else{
//         return false;
//     }
// }


const setAlarm = (employed, vacation) => employed && !vacation // ? true : false;


console.log(setAlarm(true, true),  false,"Should be false.");
console.log(setAlarm(false,true),  false, "Should be false.");
console.log(setAlarm(true, false), true,"Should be true.");


// CC2

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.


// function cockroachSpeed(s) {
//     return Math.floor(s/0.036);
// }

const cockroachSpeed = s => Math.floor(s/0.036);


console.log(cockroachSpeed(1.08), 30);
console.log(cockroachSpeed(1.09), 30);
console.log(cockroachSpeed(0), 0);


// CC3

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!


function doubleChar(str) {
    let result = "";
    for(let i = 0; i < str.length; i++) {
        result += str[i]
        result += str[i]
    };
    return result;
};


console.log(doubleChar("abcd"), "aabbccdd");
console.log(doubleChar("Adidas"), "AAddiiddaass");
console.log(doubleChar("1337"), "11333377");
console.log(doubleChar("illuminati"), "iilllluummiinnaattii");
console.log(doubleChar("123456"), "112233445566");
console.log(doubleChar("%^&*("), "%%^^&&**((");


// CC4

// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17


// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//     // code goes here
// }

const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) =>
    laLigaGoals + copaDelReyGoals + championsLeagueGoals;

console.log(goals(0,0,0), 0)
console.log(goals(43, 10, 5), 58)


// CC5

// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.


// function getAge(inputString){
//     // return the girl's correct age as an integer. Happy coding :) 
// }

const getAge = inputString => Number(inputString.charAt(0));


console.log(getAge("4 years old"), 4);


// CC6

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).


// function twiceAsOld(dadYearsOld, sonYearsOld) {
//     // your code here
// }

const twiceAsOld = (dadYearsOld, sonYearsOld) => Math.abs(dadYearsOld - (sonYearsOld*2));


console.log(twiceAsOld(36,7) , 22);
console.log(twiceAsOld(55,30) , 5);
console.log(twiceAsOld(42,21) , 0);
console.log(twiceAsOld(22,1) , 20);
console.log(twiceAsOld(29,0) , 29);


// CC7

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.


// function feast(beast, dish) {
//     if(beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1]) {
//         return true;
//     }else{
//         return false;
//     }
// }

const feast = (beast, dish) => beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1];


console.log(feast("great blue heron", "garlic naan"), true)
console.log(feast("chickadee", "chocolate cake"), true)
console.log(feast("brown bear", "bear claw"), false)