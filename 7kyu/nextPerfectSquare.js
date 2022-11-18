// Make func that takes in perfect square num and calculates next perfect square. If num is not perfect square return -1.

// A perfect square is a number that can be expressed as the product of an integer by itself or as the second exponent of an integer. For example, 25 is a perfect square because it is the product of integer 5 by itself, 5 × 5 = 25.

function findNextSquare(sq) {
  let sqRoot = Math.floor(Math.sqrt(sq));

  if(sqRoot * sqRoot !== sq) {
    return -1;
  } else {
    do {
      sqRoot++;
    } while (sqRoot * sqRoot != sqRoot ** 2);
  }
  return sqRoot * sqRoot;
}

console.log(findNextSquare(121)) // 144
console.log(findNextSquare(625)) // 676
console.log(findNextSquare(319225)) // 320356
console.log(findNextSquare(155)) // -1