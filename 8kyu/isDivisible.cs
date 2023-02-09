// Make function that checks if given number is divisible with x and y.
// n, x, y
static bool isDivisible(long n, long x, long y) => n % x == 0 && n % y == 0;

Console.WriteLine(isDivisible(12, 4, 3)); // true
Console.WriteLine(isDivisible(3, 3, 4)); // false
Console.WriteLine(isDivisible(8, 3, 4)); // false