// Given array with numbers, return all number multiplied.

// static int Grow(int[] x)
// {
//   int total = 1;
//   foreach (int num in x)
//   {
//     total *= num;
//   }
//   return total;
// }

static int Grow(int[] x) => x.Aggregate(1, (acc, curr) => acc * curr);

Console.WriteLine(Grow(new int[] { 2, 3, 4 })); // 24