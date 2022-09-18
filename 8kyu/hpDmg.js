// function combat(health, damage) {
//   return health > damage ? health - damage : 0;
// }

const combat = (health,damage) => health > damage ? health - damage : 0;

console.log(combat(100, 5))// 95
console.log(combat(92, 8))// 84
console.log(combat(20, 30))// 0