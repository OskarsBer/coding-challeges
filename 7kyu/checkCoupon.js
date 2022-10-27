// Write func that checks if coupon code is valid.

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate);  
}

console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'))// true
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'))// false

