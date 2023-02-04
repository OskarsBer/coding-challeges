// Create simple bmi calculator
static string Bmi(double weight, double height)
{
  double bmi = weight / (height * height);
  switch (bmi)
  {
    case <= 18.5:
      return "Underweight";
    case <= 25.0:
      return "Normal";
    case <= 30.0:
      return "Overweight";
    case > 30.0:
      return "Obese";
    default:
      return "Invalid values";
  }
}

Console.WriteLine(Bmi(80, 1.80)); // "Normal"