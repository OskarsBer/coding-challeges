// #1

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// Hint: Don't forget to check for bad values like null/undefined


function countSheeps(arrayOfSheep) {
    let presentSheeps = 0;
    for(let i = 0; i < arrayOfSheep.length; i++){
        if(arrayOfSheep[i] === true){
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
