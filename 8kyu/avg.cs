// Take in array and return avg

static double FindAverage(double[] array) => 
       array.Length != 0 ?
       array.Sum() / array.Length : 0;

Console.WriteLine(FindAverage(new double[] { 17, 16, 16, 16, 16, 15, 17, 17, 15, 5, 17, 17, 16 })); // 15.38