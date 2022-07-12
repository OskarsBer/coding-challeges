// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.


// arr, return same arr sorted, ordered from shortest to longest
// arr of str, different length str, no str are same length




// function sortByLength (array) {
//   for(let i = 0; i < array.length-1; i++) {
//     for(let j = 0; j < array.length-1; j++) {
//       if(array[j].length > array[j+1].length) {
//       [[array[j]],[array[j+1]]] = [[array[j+1]],[array[j]]];
//       }
//     }
//   }
//   return array;
// };

function sortByLength (array) {
  return array.sort((a, b) => a.length - b.length);
};


console.log(sortByLength(['aaaaaaaaa', 'aaaaa', 'aaaa', 'aaaaaaa', 'aaa', 'a']))

