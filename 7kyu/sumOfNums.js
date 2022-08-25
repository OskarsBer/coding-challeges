// sum of nums

function getSum(a, b) {
  let sum = 0;
  if(b < a) {
    for(let i = a; i >= b; i--) {
    sum += i;
    }
  }else{
    for(let i = a; i <= b; i++) {
    sum += i;
    }
  }
  return sum;
}

console.log(getSum(0,-1))// -1
console.log(getSum(0,1))// 1