// return middle char if odd, 2 middle chars if even
// return str

function getMiddle(s) {
  let half = Math.floor(s.length/2);
  if(s.length % 2 === 0) {
    return `${s[half-1]}${s[half]}`;
  }else if (s.length % 2 != 0) {
    return s[half]
  }else{
    return s;
  }
}

console.log(getMiddle("test"))// "es"
console.log(getMiddle("testing"))// "t"
console.log(getMiddle("middle"))// "dd"
console.log(getMiddle("A"))// "A"