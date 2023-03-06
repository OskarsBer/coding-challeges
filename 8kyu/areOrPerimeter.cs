// Make function that calculates square area or rectangle perimeter depending of which you are given.
static int AreaOrPerimeter(int l, int w) => l == w ? l * w : (l + w) * 2;

Console.WriteLine(AreaOrPerimeter(2, 4)); // 12