// Make function that returns planet name depending on it's location
static string GetPlanetName(int id)
{
  string name;
  switch (id)
  {
    case 1:
      name = "Mercury";
      break;
    case 2:
      name = "Venus";
      break;
    case 3:
      name = "Earth";
      break;
    case 4:
      name = "Mars";
      break;
    case 5:
      name = "Jupiter";
      break;
    case 6:
      name = "Saturn";
      break;
    case 7:
      name = "Uranus";
      break;
    case 8:
      name = "Neptune";
      break;
    default:
      return "Id outside of range";
  }
  return name;
}

Console.WriteLine(GetPlanetName(3)); // "Earth"
