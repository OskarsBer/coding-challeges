// Random 8 kyu katas for Csharp learning purposes

// Remove spaces from given string
static string NoSpace(string input)
{
  return input.Replace(" ", "");
}

Console.WriteLine(NoSpace(" Hello World! ")); // "HelloWorld!"

// Given array of number, sum up and return all positive numbers
// If there is nothing to sum return "0"

static int PositiveSum(int[] arr)
{
  int sum = 0;

  foreach (var num in arr)
  {
    if (num > 0)
    {
      sum += num;
    }
  }
  return sum;
}

Console.WriteLine(PositiveSum(new int[] { 0, 1, 2, 3, -3 })); // 6

