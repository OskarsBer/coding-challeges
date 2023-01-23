// Find a needle in the haystack.

static string FindNeedle(object[] haystack)
{
  int needlePosition = Array.IndexOf(haystack, "needle");

  return $"found the needle at position {needlePosition}";
}

Console.WriteLine(FindNeedle(new object[] { '3', "123124234", null, "needle", "world", "hay", 2, '3', true, false })); // "found the needle at position 3"