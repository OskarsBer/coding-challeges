// Make func that counts up by x
// Return array with result
static int[] CountBy(int x, int n)
{
  return Enumerable.Range(1, n).Select(i => i * x).ToArray();
}

Console.WriteLine(CountBy(2, 5)); // {2,4,6,8,10}