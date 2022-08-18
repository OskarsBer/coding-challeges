// Make function that takes in str and check for repeating characters
// Return boolean

function isIsogram(str){
  let newArr = str.toLowerCase().split('').sort();
    if (!newArr.length) {
      return true;
    }
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === newArr[i+1]) {
      return false;
      }
    }
  return true;
}


console.log( isIsogram("Dermatoglyphics"))// true
console.log( isIsogram("isogram"))// true
console.log( isIsogram("aba"))// false
console.log( isIsogram("isIsogram"))// false
console.log( isIsogram(""))// true