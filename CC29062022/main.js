// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.


function well(x){
    let goodIdeas = 0;
    
    for(let i = 0; i < x.length; i++){
        if(x[i] === 'good'){
            goodIdeas++;
        }
    }

    if(goodIdeas > 2){
        return 'I smell a series!'
    }else if(goodIdeas > 0){
        return 'Publish!'
    }else{
        return 'Fail!'
    }

}


console.log(well(['bad', 'bad', 'bad']), 'Fail!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');


// CC2

// Write a function that checks if a given string (case insensitive) is a palindrome.


// function isPalindrome(x) {
//     // your code here
// }

const isPalindrome = x => x.toLowerCase() === x.split("").reverse().join("").toLowerCase();

console.log(isPalindrome("a"), true);
console.log(isPalindrome("aba"), true);
console.log(isPalindrome("Abba"), true);
console.log(isPalindrome("hello"), false);
console.log(isPalindrome("Bob"), true);
console.log(isPalindrome("Madam"), true);
console.log(isPalindrome("AbBa"), true);
console.log(isPalindrome(""), true);
