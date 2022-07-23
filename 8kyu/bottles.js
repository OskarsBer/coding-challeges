// takes in 3 arg
// calculate price after discont
// calculate how many bottles needed

function dutyFree(normPrice, discount, hol) {
  let price = normPrice * (discount / 100);
  return Math.floor(hol / price);
}

console.log(dutyFree(12, 50, 1000), 166);
console.log(dutyFree(17, 10, 500), 294);
console.log(dutyFree(24, 35, 3000), 357);