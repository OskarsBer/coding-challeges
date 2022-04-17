
function findSmallestInt(args) {
    let small = args[0];
    for (i = 0; i < args.length; i++) {
      if (small > args[i]) {
        small = args[i];
      }
    }
    return small;
  }
  
  
findSmallestInt([34, 15, 88, 2]);
findSmallestInt([34, -345, -1, 100]);