// remove duplicates

function distinct(arr) {
  let result = [];
  for(let elt of arr) {
    if(!result.includes(elt)) {
      result.push(elt);
    }
  }
  return result;
}

console.log(distinct([1]))// [1]
console.log(distinct([1,2]))// [1,2]
console.log(distinct([1,1,2]))// [1,2]