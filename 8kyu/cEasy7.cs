// Random 8 kyu katas for Csharp learning purposes

// Make basic math op program
static double basicOp(char operation, double value1, double value2)
{
  switch (operation)
  {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      return -1;
  }
}

Console.WriteLine(basicOp('*', 5, 4)); // 20
Console.WriteLine(basicOp('+', 10, 3)); // 13
Console.WriteLine(basicOp('/', 15, 3)); // 5

// double
static int DoubleInteger(int n) => n * 2;

Console.WriteLine(DoubleInteger(2)); // 4

// Boolean to string
static string boolean_to_string(bool b) => Convert.ToString(b);

Console.WriteLine(boolean_to_string(true)); // "True"

// Convert integer to reversed array of digits
static long[] Digitize(long n)
{
  return n.ToString()
  .Reverse()
  .Select(x => long.Parse(x.ToString()))
  .ToArray();
}

Console.WriteLine(Digitize(12345)); // [5,4,3,2,1]


