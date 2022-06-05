// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'


// function greet (name, owner) {
//     if(name === owner) {
//         return `Hello boss`
//     }else{
//         return `Hello guest`
//     }
// }

const greet = (name, owner) => name === owner ? `Hello boss` : `Hello guest`;


console.log(greet('Daniel', 'Daniel'), 'Hello boss')
console.log(greet('Greg', 'Daniel'), 'Hello guest')


// CC2


// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.


// const areaOrPerimeter = function(l, w) {
//     if(l === w) {
//         return l**2
//     }else{
//         return 2*(l+w);
//     }
// };

const areaOrPerimeter = (l, w) => l === w ? l**2 : 2*(l+w);

console.log(areaOrPerimeter(4 , 4) , 16);
console.log(areaOrPerimeter(6 , 10) , 32);


// CC3


// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"


const rps = (p1, p2) => {
    if(p1 === p2){
        return `Draw!`
    }else if(p1 === 'scissors' && p2 === 'paper') {
        return `Player 1 won!`;
    }else if(p1 === 'paper' && p2 === 'rock') {
        return `Player 1 won!`;
    }else if(p1 === 'rock' && p2 === 'scissors') {
        return `Player 1 won!`;
    }else{
        return `Player 2 won!`
    }
};


console.log(rps('rock', 'scissors'));
console.log(rps('scissors', 'paper'));
console.log(rps('paper', 'rock'));


