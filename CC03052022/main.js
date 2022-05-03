// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// P: If input == empty or null, return empty arr. 0 is not positive / negative.
// R: Return an arr where first elt is count of positive nums and second elt is sum of negative nums.



function countPositivesSumNegatives(input) {
    let newArr = [];
    let positiveCount = 0;
    let negativeSum = 0;

    if(input === null || input.length === 0){
        return newArr;
    }

    for(let i = 0; i < input.length; i++){
        if(input[i] > 0){
            positiveCount++;
        }else if(input[i] <= 0){
            negativeSum += input[i];
        }
    }
    newArr.push(positiveCount, negativeSum)
    return newArr;
}


console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]), [10, -65]);

console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]), [8, -50]);

console.log(countPositivesSumNegatives([-26,89,-44,45,-38,27,21,-73,-12,-59,-40,22,-9,89,-4,71,-54,27,-21,-53,-88,20,-15,6,92,-29,85,-16,85,4,91,84,-27,-37,97,97,-37,-38,-89,-91,51,47,-97,-23,-74,94,61,-32,-59,-27,0,-46]));

console.log(countPositivesSumNegatives([null, , undefined]));