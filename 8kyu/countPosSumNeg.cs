// Count how many positive numbers and what is sum of negative numbers in given array. Return as array where first elt is pos count, second elt is sum of negatives. 
// If input is empty or null return empty array.

static int[] CountPositivesSumNegatives(int[] input)
{
  int positiveCount = 0;
  int negativeSum = 0;

  if (input == null || input.Length == 0)
  {
    return new int[] { };
  }

  foreach (int num in input)
  {
    if (num > 0)
    {
      positiveCount += 1;
    }
    else if (num < 0)
    {
      negativeSum += num;
    }
  }
  return new int[] { positiveCount, negativeSum };
}

Console.WriteLine(CountPositivesSumNegatives(new[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15 })); // {10, -65}



