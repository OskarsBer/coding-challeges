// Make function that takes in array of words and returns sentence
static string Smash(string[] words) => string.Join(" ", words);

Console.WriteLine(Smash(new string[] { "Hello", "nice", "to", "meet", "you" })); // ["Hello, nice to meet you"]
