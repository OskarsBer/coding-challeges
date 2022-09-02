// function problem(x){
//   if(+x || x === 0) {
//     return x*50+6;
//   }else{
//     return "Error";
//   }
// }

const problem = x => +x || x === 0 ? x*50+6 : "Error";

console.log(problem("hello"))// "Error"
console.log(problem(1))// 56
console.log(problem(5))// 256
console.log(problem(0))// 6
console.log(problem(1.2))// 66
console.log(problem(3))// 156
console.log(problem("RyanIsCool"))// "Error"
console.log(problem(-3))// -144
console.log(problem(""))// "Error"
console.log(problem(0.03))// 7.5