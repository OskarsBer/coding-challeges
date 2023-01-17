// Make function that takes in int and string as parameters and returns string * int
using System.Linq;

static string RepeatStr(int n, string s) => String.Concat(Enumerable.Repeat(s, n));

Console.WriteLine(RepeatStr(5, "abc"));
