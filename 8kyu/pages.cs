// Calculate how many pages needed if n= students, m= pages
// If any values less than 0 return 0

// static int Paperwork(int n, int m)
// {
//   if (n > 0 && m > 0)
//   {
//     return n * m;
//   }
//   else
//   {
//     return 0;
//   }
// }

static int Paperwork(int n, int m) => n > 0 && m > 0 ? n * m : 0;

Console.WriteLine(Paperwork(5, 5)); // "25"
