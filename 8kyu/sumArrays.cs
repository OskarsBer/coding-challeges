// Return sum of array

static double SumArray(double[] array)
{
  double total = 0;
  foreach (double num in array)
  {
    total += num;
  }
  return total;
}

Console.WriteLine(SumArray(new double[] { 1, 5.2, 4, 0, -1 })); // 9.2