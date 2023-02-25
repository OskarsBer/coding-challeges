// Write function that calculates cockroach speed, that takes in speed in km/h and returns it in cm/s. Round down to the integer (floored).
// Given number can be 0 or above.
static int CockroachSpeed(double x) => Convert.ToInt32(Math.Floor(x / 0.036));

Console.WriteLine(CockroachSpeed(1.09)); // 30


