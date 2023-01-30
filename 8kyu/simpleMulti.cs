// Make simple multiplication func
// multi given num by 8 if even or by 9 otherwise

static int Multiply(int x) => x % 2 == 0 ? x * 8 : x * 9;

Console.WriteLine(Multiply(8)); // 64
Console.WriteLine(Multiply(5)); // 45