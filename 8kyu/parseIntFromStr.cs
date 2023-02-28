// Make func that parses int from given string
static int GetAge(string inputString) => Convert.ToInt32(inputString.Substring(0, 1));

Console.WriteLine(GetAge("9 years old")); // 9