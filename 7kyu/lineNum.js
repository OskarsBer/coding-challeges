// Make func that displays line number for 'text editor'

const number = array => {
  let result = [];
  for(let i = 0; i < array.length; i++) {
    result.push(`${i+1}: ${array[i]}`);
  }
  return result;
}

console.log(number([]), [])
console.log(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"])        