// Random 8 kyu katas for Csharp learning purposes


// Take in bool, return "Yes" if true, "No" if false
public static class Kata
{
  public static string boolToWord(bool word) => word ? "Yes" : "No";
}

// Reverse passed string

// using System;

// public static class Kata
// {
//   public static string Solution(string str) 
//   {
//     string result = "";

//     for (int i = str.Length-1; i >= 0; i--)
//     {
//       result += str[i];
//     }

//     return result;
//   }
// }

using System;

public static class Kata
{
  public static string Solution(string str) 
  {
    char[] converted = str.ToCharArray();
    Array.Reverse(converted);
    return new string(converted);
  }
}

// always return negative int

using System;

public static class Kata
{
  public static int MakeNegative(int number) => number > 0 ? -number : number;
}

