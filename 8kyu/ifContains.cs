// Does given array contains value
static bool Check(object[] a, object x) => a.Contains(x);

Console.WriteLine(Check(new object[] { 66, 101 }, 66)); // True