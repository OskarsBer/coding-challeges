// Make function that takes in int and string as parameters and returns string * int
using System.Linq;

static string RepeatStr(int n, string s) => String.Concat(Enumerable.Repeat(s, n));

Console.WriteLine(RepeatStr(5, "abc"));

// Remove first and last character from given string
static string Remove_char(string s) => s.Substring(1, s.Length - 2);

Console.WriteLine(Remove_char("12345"));