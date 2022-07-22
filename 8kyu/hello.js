// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"


// function hello(name) {
//   if(!name) {
//     return 'Hello, World!'
//   }else{
//     return `Hello, ${name.charAt(0).toUpperCase()+name.toLowerCase().slice(1)}!`
//   }
// }


const hello = name => !name ? 'Hello, World!' : `Hello, ${name.charAt(0).toUpperCase()+name.toLowerCase().slice(1)}!`


console.log(hello('alice'))// 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'"
console.log(hello())// 'Hello, World!', "returns 'Hello, World!' when name is not given"
console.log(hello(''))// 'Hello, World!', "returns 'Hello, World!' when name is an empty string"