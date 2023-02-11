// Make function that returns reverse sequence array from n to 1
static int[] ReverseSeq(int n)
{
  var result = new List<int>();
  for (int i = n; i > 0; i--)
  {
    result.Add(i);
  }
  return result.ToArray();
}

Console.WriteLine(ReverseSeq(5)); // [5,4,3,2,1]