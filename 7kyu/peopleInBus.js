// Make func that calculates how many people will be left at last bus stop. Given one or multiple arr with 2 num pairs. First num - how many people get in bus at stop, second num how many people get out of bus at the stop.
// Return num of people left on bus after last stop.

const number = busStops => {
  let peopleCount = 0;
  for(let i = 0; i < busStops.length; i++) {
      peopleCount += busStops[i][0] - busStops[i][1];
  }
  return peopleCount;
}

console.log(number([[10,0],[3,5],[5,8]]))//5
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))//17
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]))//21
console.log(number([[0,0]]))//0