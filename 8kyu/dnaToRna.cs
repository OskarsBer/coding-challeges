// Make function that converts given dna string to rna string
string dnaToRna(string dna)
{
  string result = "";
  foreach (char x in dna)
  {
    if (x == 'T')
    {
      result += 'U';
    }
    else
    {
      result += x;
    }
  }
  return result;
}

Console.WriteLine(dnaToRna("GCAT")); // "GCAU"