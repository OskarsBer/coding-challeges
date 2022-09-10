// Make function that filter friends/foes. If name is 4 char long its friend.
// Array of friend names.

const friend = names => {
  let friends = [];
  for(let name of names) {
    if(name.length === 4) {
    friends.push(name)
    }
  }
  return friends;
}

console.log(friend(["Ryan", "Kieran", "Mark"]))// ["Ryan", "Mark"]
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))// ["Ryan"]
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))// ["Jimm", "Cari", "aret"]
console.log(friend(["Love", "Your", "Face", "1"]))// ["Love", "Your", "Face"]