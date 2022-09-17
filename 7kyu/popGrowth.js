// Make func that calculates pop increase, given pop, increase in % per year, end pop
// Num of years to reach end pop

function nbYear(p0, percent, aug, p) {
  let townPop = p0;
  let howManyYears = 0;
  while(townPop < p) {
    townPop =  Math.floor(townPop + (townPop * (percent/100)) + aug);
    howManyYears++;
  }
  return howManyYears;
}

console.log(nbYear(1500, 5, 100, 5000))// 15
console.log(nbYear(1500000, 2.5, 10000, 2000000))// 10
console.log(nbYear(1500000, 0.25, 1000, 2000000))// 94