// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str){
    //Shuffle It
    let newArr = str.split(' ')
    return newArr[1] + ' ' + newArr[0];
}


console.log(nameShuffler('john McClane'),'McClane john');