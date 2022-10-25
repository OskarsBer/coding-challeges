// Make func that takes in str and returns arr of indexes of all capital letters

const capitals = word => {
  let result = [];
	for(let i = 0; i < word.length; i++) {
    if(word[i] === word[i].toUpperCase()) {
      result.push(i);
    }
  }
  return result;
};

console.log(capitals('pROgraMMeRiS'))// [1,2,6,7,9,11] 