// Invert values

static int[] InvertValues(int[] input)
{
  List<int> result = new List<int>();

  foreach (int num in input)
  {
    result.Add(num * -1);
  }

  return result.ToArray();
}


Console.WriteLine(InvertValues(new int[] { -1, -2, -3, -4, -5 })); // {1,2,3,4,5}

