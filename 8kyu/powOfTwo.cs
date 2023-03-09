// Make function that takes integer as input and return a list of all the pow of 2, from 0 to given int
using System;
using System.Numerics;

static BigInteger[] PowersOfTwo(int n)
{
  BigInteger[] result = new BigInteger[n + 1];

  for (int i = 0; i <= n; i++)
  {
    result[i] = (BigInteger)Math.Pow(2, i);
  }
    return result;
}

Console.WriteLine(PowersOfTwo(2)); // [1, 2, 4]