// Is this a triangle

// function isTriangle(a,b,c) {
//    if (a+b > c && a+c > b && c+b > a) {
//     return true;
//    } else {
//     return false;
//    }
// }

const isTriangle = (a,b,c) => a+b > c && a+c > b && c+b > a;

console.log(isTriangle(1,2,2))// true
console.log(isTriangle(7,2,2))// false