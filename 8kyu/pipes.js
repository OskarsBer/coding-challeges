// given arr of nums, insert missing nums in corrent places

function pipeFix(numbers){
  let fixedPipes = [];  
  let maxVal = Math.max(...numbers)
  let minVal = Math.min(...numbers)
                   
  for(let i = minVal; i <= maxVal; i++) { 
      fixedPipes.push(i);   
  }
  return fixedPipes;
}

console.log(pipeFix([1,3,4,5]))//1,2,3,4,5
console.log(pipeFix([6,7,8,9]))