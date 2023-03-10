// Make function that takes in 3 arguments a,b,c and puts them in that order in expression containing following operators and backets in random order +,*,()
// Return highest resulting combination
static int ExpressionsMatter(int a, int b, int c)
{
  int max = 0;
  if (a * (b + c) > max)
  {
    max = a * (b + c);
  }
  if (a * b * c > max)
  {
    max = a * b * c;
  }
  if (a + b + c > max)
  {
    max = a + b + c;
  }
  if ((a + b) * c > max)
  {
    max = (a + b) * c;
  }
  return max;
}

Console.WriteLine(ExpressionsMatter(1, 2, 3)); // 9