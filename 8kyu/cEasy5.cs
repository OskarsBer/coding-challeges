// Random 8 kyu katas for Csharp learning purposes

// Find smallest int in given array of integers
static int FindSmallestInt(int[] args)
{
  int result = args[0];

  foreach (int num in args)
  {
    if (num < result)
    {
      result = num;
    }
  }
  return result;
}

Console.WriteLine(FindSmallestInt(new[] { 6, 2, 3, 4, 5, 1 })); // 1

// square, then sum integers in given array
static int SquareSum(int[] numbers)
{
  int result = 0;
  foreach (int num in numbers)
  {
    result += num * num;
  }

  return result;
}

Console.WriteLine(SquareSum(new[] { 2, 2, 3 })); // 17

// Make func that given integer sums every num going from 1 to that int.
static int Summation(int num)
{
  int result = 0;
  for (int i = 1; i <= num; i++)
  {
    result += i;
  }
  return result;
}

Console.WriteLine(Summation(3)); // 6

// Simple convert string to integer.
static int StringToNumber(String str) => Convert.ToInt32(str);

Console.WriteLine(StringToNumber("1234")); // 1234


