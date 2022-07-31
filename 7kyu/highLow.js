// take in string
// return 2 nums - highest, lowest

function highAndLow(numbers){
    let newArr = numbers.split(' ');
    let min = numbers[0];
    let max = numbers[0];

    for(let i = 0; i < newArr.length; i++) {
      if(newArr[i] < min) {
        min = newArr[i];
      }
    }
    for(let i = 0; i < newArr.length; i++) {
      if(newArr[i] > max) {
        max = newArr[i];
      }
    }
    return `${max} ${min}`
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.log(highAndLow("1 2 3"));