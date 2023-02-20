// Make function that sums two arrays
static int ArrayPlusArray(int[] arr1, int[] arr2) => arr1.Sum() + arr2.Sum();

Console.WriteLine(ArrayPlusArray(new int[] { 1, 2, 3 }, new int[] { 4, 5, 6 })); // 21
