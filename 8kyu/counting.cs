// Make counting function, that takes in num and returns array starting from 1 to that num
static int[] MonkeyCount(int n)
{
  int[] result = new int[n];

  for (int i = 0; i < n; i++)
  {
    result[i] = i + 1;
  }

  return result;
}

Console.WriteLine(MonkeyCount(10)); // [1,2,3,4,5,6,7,8,9,10]


