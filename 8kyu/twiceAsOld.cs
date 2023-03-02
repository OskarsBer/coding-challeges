// Make function that takes in two arguments (curent father's age, current age of his son) and calculates how many years ago the father was twice as old as his son or in how many years he will be twice as old.

// static int TwiceAsOld(int dadYears, int sonYears) => Math.Abs(sonYears * 2 > dadYears ? dadYears - sonYears * 2 : sonYears * 2 - dadYears);

static int TwiceAsOld(int dadYears, int sonYears) => Math.Abs(dadYears - sonYears * 2);

Console.WriteLine(TwiceAsOld(30, 7)); // 16
