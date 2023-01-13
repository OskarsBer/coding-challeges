// remove ! mark from the end
// assume input always str

const remove = str => str[str.length-1] === "!" ? str.slice(0, -1) : str;

console.log(remove("Hello!"));
console.log(remove("Hello!!"));
console.log(remove("!Hello"));
