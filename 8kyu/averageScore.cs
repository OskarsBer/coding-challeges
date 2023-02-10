// Make func that compares your score to average 
static bool BetterThanAverage(int[] ClassPoints, int YourPoints)
{
  double averagePoints = ClassPoints.Average();
  return YourPoints > averagePoints;
}

Console.WriteLine(BetterThanAverage(new int[] { 100, 40, 34, 57, 29, 72, 57, 88 }, 75)); // true

