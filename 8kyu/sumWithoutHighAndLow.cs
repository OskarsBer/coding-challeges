// Make function that sums up elements in array except highest and lowest value
// In case of empty/null/single element array return 0

// static int Sum(int[] numbers)
// {
//   int sum = 0;
//   foreach (int num in numbers)
//   {
//     sum += num;
//   }
//   return sum - (numbers.Min() + numbers.Max());
// }

static int Sum(int[] numbers) =>
    numbers?.Length > 1 ?
    numbers.Sum() - (numbers.Min() + numbers.Max()) : 0;

Console.WriteLine(Sum(new[] { 6, 2, 1, 8, 10 })); // 16