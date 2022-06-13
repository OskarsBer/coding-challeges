// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

// As usual, your function/method should be pure, i.e. it should not mutate the original string.


String.prototype.toAlternatingCase = function () {
    let result = '';
    for(let i = 0; i < this.length; i++) {
        if(this[i] === this[i].toLowerCase()) {
            result += this[i].toUpperCase();
        }else{
            result += this[i].toLowerCase();
        }
    }
    return result;
}


    console.log("hello world".toAlternatingCase(), "HELLO WORLD");
    console.log("HELLO WORLD".toAlternatingCase(), "hello world");
    console.log("hello WORLD".toAlternatingCase(), "HELLO world");
    console.log("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
    console.log("12345".toAlternatingCase(), "12345");
    console.log("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
    console.log("String.prototype.toAlternatingCase".toAlternatingCase(), "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
    console.log("Hello World".toAlternatingCase().toAlternatingCase(), "Hello World");


// CC2

// Now you have to write a function that takes an argument and returns the square of it.

const square = number => number**2;

console.log(square(3), 9);


// CC3

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".


// function hoopCount (n) {
//     if(n >= 10) {
//         return "Great, now move on to tricks";
//     }else{
//         return "Keep at it until you get it"
//     }   
// }

const hoopCount = n => n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";

console.log(hoopCount(3),"Keep at it until you get it" ) 
console.log(hoopCount(11),"Great, now move on to tricks" )
