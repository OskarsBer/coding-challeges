function makeNegative(num) {
    if(num <= 0){
        return num
    }else{
        num *= -1
        return num
    }
}
  


makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12


// Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr (n, s) {
    let repeatedStr = ''
    for(let i = 0;i < n; i++){
        repeatedStr += s
    }
    return repeatedStr;
  }


repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"