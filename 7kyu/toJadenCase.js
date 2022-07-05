// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// String, capitalize each word
// string
// return


const toJadenCase = str => 
    str.split(' ')
    .map(elt => elt[0]
    .toUpperCase() + elt.slice(1))
    .join(' ');

    // split string in array
    // map capitalize
    // join



console.log(toJadenCase('hello world! this is a test'))

