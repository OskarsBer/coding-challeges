// #1

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// Hint: Don't forget to check for bad values like null/undefined


function countSheeps(arrayOfSheep) {
    let presentSheeps = 0;
    for(let i = 0; i < arrayOfSheep.length; i++){
        if(arrayOfSheep[i] === true){ // can emmit "=== true" it's redundant
            presentSheeps++;
        }
    }
    return presentSheeps;
}



console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ]), 17)

console.log(countSheeps([true,  true, ]), 2)

console.log(countSheeps([false, null, undefined, true]), 1)


// #2

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5"



function findNeedle(haystack) {
    // your code here
  }

  console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]), 'found the needle at position 3')

  console.log(findNeedle(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']), 'found the needle at position 5')

  console.log(findNeedle([1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54]), 'found the needle at position 30')