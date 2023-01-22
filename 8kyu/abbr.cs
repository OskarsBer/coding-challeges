// Make abbreviate func. Take in 2 work name, returns initials.
// ex. John Dallis - J.D

static string AbbrevName(string name)
{
  string[] nameDivided = name.ToUpper().Split(' ');
  return nameDivided[0][0] + "." + nameDivided[1][0];
}

Console.WriteLine(AbbrevName("John Dallis")); // J.D



