// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.


// count a,e,i,o,u
// lower case letters, spaces
// console

function getCount(str) {
  let count = 0;

  for(elt of str) {
    if(elt === 'a' || elt === 'e' || elt === 'i' || elt === 'o' || elt === 'u') {
      count++;
    }
  }
  return count;
}


console.log(getCount("abracadabra"))// 5

