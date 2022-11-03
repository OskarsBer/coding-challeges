// Make basic greet func.

const greet = name => {
  const userName = name[0].toUpperCase() + name.toLowerCase().slice(1);
  return `Hello ${userName}!`
};

console.log(greet('riley'))// 'Hello Riley!'
console.log(greet('JOHN'))// 'Hello John!'