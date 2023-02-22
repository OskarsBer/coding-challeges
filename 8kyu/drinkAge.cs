// Make function that takes in age and returns what people drink at that age
static string PeopleWithAgeDrink(int old)
{
  string age;

  switch (old)
  {
    case < 14:
      age = "drink toddy";
      break;
    case < 18:
      age = "drink coke";
      break;
    case < 21:
      age = "drink beer";
      break;
    case >= 21:
      age = "drink whisky";
      break;
  }

  return age;
}

Console.WriteLine(PeopleWithAgeDrink(18)); // drink beer


