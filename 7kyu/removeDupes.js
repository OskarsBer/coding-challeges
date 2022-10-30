// Make func that remove duplicate words. Only leave single instance of word.

const removeDuplicateWords = s => {
  const newArr = s.slice().split(' ');
  let result = [];
  for(let word of newArr) {
    if(!result.includes(word)) {
      result.push(word);
    }
  }
  return result.join(' ');
};

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))// 'alpha beta gamma delta'

