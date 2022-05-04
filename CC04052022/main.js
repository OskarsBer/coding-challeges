// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]


//P: Special characters? Empty elements?
//R: Returns new arr with every elt - doubled.


function maps(x){
    if(x === undefined || x.length == 0){
        return 'Array is invalid'
    }else{
    return x.map(element => element * 2) 
    }
}

console.log(maps([]))
console.log(maps([1, 2, 3]), [2, 4, 6])
console.log(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8])
console.log(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4])



// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]


// P: 1 digit num?
// R: Return array of digits.

function digitize(n) {
    let numArr = n.toString().split('');
    let result = [];

    for(let i = numArr.length - 1; i >= 0; i--){
        result.push(Number(numArr[i]));
    }
    return result;
  }

console.log(digitize(35231),[1,3,2,5,3])
console.log(digitize(0),[0])