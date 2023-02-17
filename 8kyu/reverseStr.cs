// Make func that returns reversed string
static string ReverseWords(string str)
{
  string[] result = str.Split(' ');
  Array.Reverse(result);
  return string.Join(" ", result);
}

Console.WriteLine(ReverseWords("hello world!")); // "world! hello"
