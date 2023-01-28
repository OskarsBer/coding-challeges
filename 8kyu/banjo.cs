// Are you playin' banjo
static string AreYouPlayingBanjo(string name) =>
        char.ToLower(name[0]) == 'r' ?
        $"{name} plays banjo" :
        $"{name} does not play banjo";

Console.WriteLine(AreYouPlayingBanjo("Martin")); // "Martin does not play banjo"
Console.WriteLine(AreYouPlayingBanjo("Robert")); // "Robert plays banjo"



