// Make func that accepts one side of the DNA as string and return the other side. DNA strand is never empty.
// A -> T
// C -> G

function DNAStrand(dna){
  let result = '';  
  for(let char of dna) {
    switch (char) {
      case 'A': 
        result += 'T'
        break;
      case 'T': 
        result += 'A'
        break;
      case 'C': 
        result += 'G'
        break;
      case 'G': 
        result += 'C'
        break;
    }
  }
  return result;
}

console.log(DNAStrand('AAAA'))// 'TTTT'
console.log(DNAStrand('ATTGC'))// 'TAACG'
console.log(DNAStrand('GTAT'))// 'CATA'