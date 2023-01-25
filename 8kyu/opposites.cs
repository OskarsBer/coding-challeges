// Make func that takes number of flower petals for two flowers and return 'true' of 'false'
// True if flowers petal count each are opposite (odd/even) to other

static bool lovefunc(int flower1, int flower2) =>
        (flower1 % 2 == 0 && flower2 % 2 != 0) ||
        (flower1 % 2 != 0 && flower2 % 2 == 0);

Console.WriteLine(lovefunc(2, 3)); // "True"
Console.WriteLine(lovefunc(2, 4)); // "False"
