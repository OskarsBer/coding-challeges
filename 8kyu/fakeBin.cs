// Make simple func that 'translates' given string into fake binary.
static string FakeBin(string x)
{
  string result = "";
  foreach (char num in x)
  {
    if (Char.GetNumericValue(num) < 5)
    {
      result += "0";
    }
    else
    {
      result += "1";
    }
  }
  return result;
}

Console.WriteLine(FakeBin("45385593107843568")); // "01011110001100111"