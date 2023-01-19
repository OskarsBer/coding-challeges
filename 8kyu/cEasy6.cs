// Random 8 kyu katas for Csharp learning purposes

// Count how many 'true' in array
// Handle for null/undefined etc.
static int CountSheeps(bool[] sheeps)
{
  int total = 0;
  foreach (bool sheep in sheeps)
  {
    if (sheep)
    {
      total++;
    }
  }
  return total;
}

Console.WriteLine(CountSheeps(new bool[] {true,  true,  true,  false,
  true,  true,  true, false})); // 6

// Make simple greeting func
// "Hello, <name> how are you doing today?"
static string Greet(string name) => $"Hello, {name} how are you doing today?";

Console.WriteLine(Greet("Jacob")); // "Hello, Jacob how are you doing today?"

// Calculate how many water cyclist drinks if 0.5l per hour
// Return rounding down
static int Litres(double time) => Convert.ToInt32(Math.Floor(time * 0.5));

Console.WriteLine(Litres(6.7)); // 3

// Calculate in which centure is given year
static int СenturyFromYear(int year) => (year - 1) / 100 + 1;

Console.WriteLine(СenturyFromYear(1900)); // 19
Console.WriteLine(СenturyFromYear(1901)); // 20



