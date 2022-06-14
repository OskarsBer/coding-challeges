// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.


String.prototype.isUpperCase = function() {
    for(let i = 0; i < this.length; i++) {
        if(this[i] === this[i].toLowerCase()) {
            return false;
        }
    }
    return true;
}


console.log('Hello World'.isUpperCase(), false, 'Hello World is not upper case');
console.log('hello world'.isUpperCase(), false, 'hello world is not upper case');
console.log('Hello world'.isUpperCase(), false, 'Hello world is not upper case');
console.log('hello World'.isUpperCase(), false, 'hello World is not upper case');
console.log('HELLO WORLD'.isUpperCase(), true, 'HELLO WORLD is upper case');