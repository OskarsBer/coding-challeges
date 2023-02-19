// Make simple alarm function that takes in 2 parameters - employed and vacation.
// Return true if employed and not on vacation, false otherwise.
static bool SetAlarm(bool employed, bool vacation) => employed && !vacation;

Console.WriteLine(SetAlarm(true, true)); // false
Console.WriteLine(SetAlarm(true, false)); // true