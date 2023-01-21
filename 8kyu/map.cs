// Given array of integers return new array with each of them doubled.
static int[] Maps(int[] x) => x.Select(num => num * 2).ToArray();

Console.WriteLine(Maps(new int[] { 2, 3, 4 })); // [4,6,8]
