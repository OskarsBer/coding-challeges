// Takes in list of non-negative nums and str
// Returns new list with the str filtered

// function filter_list(arr) {
//   return arr.filter(num => num === +num);
// }

const filter_list = arr => arr.filter(num => num === +num);

console.log(filter_list([1,2,'a','b']))//[1,2]
console.log(filter_list([1,'a','b',0,15]))//[1,0,15]
console.log(filter_list([1,2,'aasf','1','123',123]))//[1,2,123]