// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5


function litres(time) {
    return Math.floor(time/2)  // time * 0.5 probaby would be more clear
  }


  console.log(litres(2), 1, 'should return 1 litre');
  console.log(litres(1.4), 0, 'should return 0 litres');
  console.log(litres(12.3), 6, 'should return 6 litres');
  console.log(litres(0.82), 0, 'should return 0 litres');
  console.log(litres(11.8), 5, 'should return 5 litres');
  console.log(litres(1787), 893, 'should return 893 litres');
  console.log(litres(0), 0, 'should return 0 litres');


  // #2


// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// P: Empty arrays?
// R: Return true if array contains given value or false if it does not.
// P: Make function that takes in array and value. Go through array and check if it contains give value. Return true or false.


function check(a, x) {
    return a.includes(x, 0)
}

  console.log(check([], 2))
  console.log(check([66, 101], 66), true);
  console.log(check([101, 45, 75, 105, 99, 107], 107), true);
  console.log(check(['t', 'e', 's', 't'], 'e'), true);
  console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);


